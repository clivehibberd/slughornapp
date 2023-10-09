import * as React from "react";
import { useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import CharacteristicsSelector from "./CharacteristicsSelector";
import SlugSearchResults from "./SlugSearchResults";
import { ApplicationContext } from "../contexts/applicationcontext";
import { FilteredPeopleContext } from "../contexts/filteredpeoplecontext";

import PeopleFilter from "./appdata/PeopleFilter";
import { DynamicPersonQueryTemplate } from "../graphql/slugqueries";
import { AndEnumFilterGenerator } from "../graphql/util/filterbuilder";

import { useEffect } from "react";
import { API } from "aws-amplify";

const drawerWidth = "auto";
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

var originalEnumMap = new Map();

export default function SlugDrawer() {
  const { enumMap, setEnumMap } = useContext(ApplicationContext); // Get the current value of the map of enums
  const { filteredPeople, setFilteredPeople } = useContext(
    FilteredPeopleContext
  );
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
  //var originalEnumMap = new Map(enumMap); // try and keep a copy
  useEffect(() => {
    searchPeople(enumMap);
  }, []);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // This gets called whenever we close the drawer, good.
  // We could execute the searchPeople here
  const handleDrawerClose = () => {
    console.log("IN DRAWER", enumMap);
    searchPeople(enumMap);
    setOpen(false);
  };

  // Just close the drawer without updating search for people
  const handleDrawerQuit = () => {
    /**The below works but does not reset the radio buttons to the original map - visually confusing
     * You cant uncomment this until you know how to zap the current radiobutton selections inside the component enumselector
     * setEnumMap(originalEnumMap);
     *  */

    setOpen(false);
  };
  // Just clear the selection map updating search for people
  const handleDrawerClear = () => {
    /**The below works but does not reset the radio buttons to the original map - visually confusing
     * You cant uncomment this until you know how to zap the current radiobutton selections inside the component enumselector
     * setEnumMap(originalEnumMap);
     *  */
    
    //console.log ("Clearing All selections");
    const clearMap = new Map();
    setEnumMap(clearMap);
    //searchPeople(clearMap);
  };


  async function searchPeople( map) {
    const filter = AndEnumFilterGenerator(map);
    console.log("Filter is ", filter);
    const queryTemplate = DynamicPersonQueryTemplate;
    const queryToExecute = queryTemplate.replace("FILTER", filter);

    const apiData = await API.graphql({
      query: queryToExecute,
    });
    const peopleFromAPI = apiData.data.listPeople.items;
    //console.log("Got People in SlugDrawer");
    //      console.log(peopleFromAPI.listPeople);
    /*
    await Promise.all(
      peopleFromAPI.map(async (person) => {
                  console.log(person);
      })
    );
    */
    setFilteredPeople(peopleFromAPI);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <SearchIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Slughorn Alpha
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
        
          <IconButton onClick={handleDrawerQuit}>ESC</IconButton>
          <IconButton onClick={handleDrawerClose}>GO</IconButton>
        </DrawerHeader>
        <Divider />
        <CharacteristicsSelector />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <SlugSearchResults />
      </Main>
    </Box>
  );
}
