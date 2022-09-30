import React, { ReactNode } from 'react';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

export type RoadmapProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Roadmap({ children }: RoadmapProps) {
  return (
    <div>
      <Card
        sx={{
          width: 260,
          height: 170,
          borderRadius: '10px',
          marginTop: 5,
          marginLeft: '12.5rem',
        }}
      >
        <CardContent>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <List sx={{ listStyleType: 'disc', ml: -1 }}>
                <ListItem
                  sx={{ fontWeight: 'bold', fontSize: '1.3rem', mt: -1.5 }}
                >
                  Roadmap
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List sx={{ listStyleType: 'disc', ml: 6, mt: -1 }}>
                <ListItem sx={{ p: -3 }}>
                  <a href="#">view</a>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List sx={{ listStyleType: 'disc', ml: 1, mt: -2.8 }}>
                <ListItem
                  sx={{
                    display: 'list-item',
                    ml: 3,
                    color: 'orange',
                    fontSize: '26px',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'hsl(224, 20%, 49%)',
                      fontSize: '14px',
                      ml: -2,
                    }}
                  >
                    Planned
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List sx={{ listStyleType: 'disc', ml: 8 }}>
                <ListItem sx={{ mt: -1.5 }}>1</ListItem>
              </List>
            </Grid>
          </Grid>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <List sx={{ listStyleType: 'disc', ml: 1, mt: -4.5 }}>
                <ListItem
                  sx={{
                    display: 'list-item',
                    ml: 3,
                    color: 'purple',
                    fontSize: '26px',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'hsl(224, 20%, 49%)',
                      fontSize: '14px',
                      ml: -2,
                    }}
                  >
                    In-Progress
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List sx={{ listStyleType: 'disc', ml: 8 }}>
                <ListItem sx={{ mt: -3 }}>1</ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List sx={{ listStyleType: 'disc', ml: 1, mt: -5.5 }}>
                <ListItem
                  sx={{
                    display: 'list-item',
                    ml: 3,
                    color: 'skyblue',
                    fontSize: '26px',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'hsl(224, 20%, 49%)',
                      fontSize: '14px',
                      ml: -2,
                    }}
                  >
                    Live
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List sx={{ listStyleType: 'disc', ml: 8 }}>
                <ListItem sx={{ mt: -4 }}>1</ListItem>
              </List>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
