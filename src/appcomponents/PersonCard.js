import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea } from "@mui/material";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function PersonCard({ person }) {
  return (
    <Card sx={{ width: 250, maxHeight: 150 }}>
      <CardActionArea href={person.uri} target="_blank" rel="noreferrer">
        <CardContent>
          <table align="left">
            <th></th>
            <tr>
              <td>
                <CardMedia
                  component="img"
                  height="100"
                  image={person.image}
                  alt={person.external_id}
                />
              </td>
              <td>
                <Typography variant="h12">
                  {person.first_name} {person.last_name} ({person.persontype})
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {person.party}
                </Typography>
              </td>
            </tr>
          </table>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
