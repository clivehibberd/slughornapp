import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';


export default function RadioPositionEnd() {
  return (
    <RadioGroup aria-label="Your plan" name="people" defaultValue="Individual">
      <List
      orientation="horizontal"
        sx={{
          minWidth: 240,
          '--List-gap': '0.5rem',
          '--ListItem-paddingY': '1rem',
          '--ListItem-radius': '8px',
          '--ListItemDecorator-size': '32px',
        }}
      >
        {['Individual', 'Team', 'Enterprise'].map((item, index) => (
          <ListItem
            variant="outlined"
            key={item}
            sx={{ boxShadow: 'sm', backgroundColor: 'blue', bgcolor: 'background.body' }}
          >
            <ListItemDecorator>
            <img height="60px" alt="TEST" src={process.env.PUBLIC_URL + '/images/cliveli.jpeg'} sx={{ width: 30, height: 30 }}/>

            </ListItemDecorator>
            <Radio
              overlay
              value={item}             
              sx={{ flexGrow: 1, flexDirection: 'row-reverse' }}
              slotProps={{
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      inset: -10,
                      border: '5px solid',
                      borderColor: 'red',
                      
                    }),
                  }),
                }),
              }}
            />
          </ListItem>
        ))}
      </List>
    </RadioGroup>
  );
}
