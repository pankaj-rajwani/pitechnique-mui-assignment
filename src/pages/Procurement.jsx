import { Grid } from '@mui/material';
import { Filters, OrdersList, OrderDetails } from '@/components';

export const Procurement = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Filters />
        <OrdersList />
      </Grid>
      <Grid item xs={12} md={8}>
        <OrderDetails />
      </Grid>
    </Grid>
  );
};
