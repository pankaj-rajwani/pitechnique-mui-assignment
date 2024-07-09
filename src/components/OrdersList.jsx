import {
  Paper,
  Typography,
  Chip,
  Card,
  CardContent,
  Grid,
  Box,
  Avatar,
} from '@mui/material';
import {
  DirectionsBoatOutlined,
  AnchorOutlined,
  PushPin,
} from '@mui/icons-material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { ordersData } from '@/utils';

export const OrdersList = () => {
  return (
    <Paper
      style={{
        marginBottom: 16,
        background: 'transparent',
        height: '71vh',
        overflow: 'hidden',
      }}
      elevation={0}
    >
      <Typography
        variant='h6'
        sx={{ display: 'flex', alignItems: 'center', margin: '20px' }}
      >
        ORDERS
        <Chip
          label='8'
          sx={{
            width: '35px',
            height: '20px',
            fontWeight: 'bold',
            borderRadius: '50px',
            marginLeft: '5px',
          }}
        />
      </Typography>
      <Box
        sx={{
          width: '100%',
          height: '71vh',
          display: 'block',
          overflowY: 'scroll',
          '::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {ordersData.map((order, index) => {
          return (
            <Card
              key={order.id}
              sx={{
                margin: '10px 0px',
                boxShadow: 'none',
                width: '100%',
                cursor: 'pointer',
                borderRadius: '8px',
                background: '#e8eced',
              }}
            >
              <CardContent>
                <Grid container>
                  <Grid item xs={9}>
                    <Typography
                      sx={{
                        fontSize: '0.8em',
                        fontWeight: 'bold',
                        letterSpacing: '0.1em',
                        color: '#1d7f5f',
                        marginBottom: '5px',
                      }}
                    >
                      {order.id}
                    </Typography>
                    <Typography
                      sx={{ fontSize: '0.8em', marginBottom: '15px' }}
                    >
                      {order.title}
                    </Typography>
                    <Chip
                      icon={
                        <DirectionsBoatOutlined
                          sx={{ fill: '#2f7fab', fontSize: '16px' }}
                        />
                      }
                      label='Lorem Ispum'
                      sx={{
                        background: '#80e7ff',
                        color: '#2f7fab',
                        fontSize: '12px',
                        borderRadius: '10px',
                      }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                    >
                      {index % 2 === 0 ? (
                        <PushPin sx={{ color: '#75888f', mr: 1 }} />
                      ) : (
                        <AnchorOutlined sx={{ color: '#75888f', mr: 1 }} />
                      )}
                      <Avatar
                        sx={{
                          bgcolor:
                            index % 2 === 0 ? deepPurple[500] : deepOrange[500],
                          width: 25,
                          height: 25,
                          fontSize: 12,
                        }}
                      >
                        {order.customer}
                      </Avatar>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        mt: 3.2,
                        color: '#96a5aa',
                      }}
                    >
                      <Typography variant='caption'>{order.type}</Typography>
                      <Typography variant='caption'>{order.date}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Paper>
  );
};
