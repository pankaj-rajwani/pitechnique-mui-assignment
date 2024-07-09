import { Paper, Typography, Grid, Button } from '@mui/material';

export const OrderDetails = () => {
  return (
    <Paper style={{ padding: 16, borderRadius: '15px', background: '#f5f5f5', height: '100vh' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant='body1'>
            Date Requested: 10 Jul 2019 Type: Services Account Code: 5830042 -
            HM PAX ACCOMODATION (LABOUR)
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'right' }}>
          <Button variant='text' style={{ marginRight: 8 }}>
            Order Summary
          </Button>
          <Button variant='text'>Order Progress</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
