import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

// components
import SalesOverview from './components/SalesOverview';
import YearlyBreakup from './components/YearlyBreakup';
import RecentTransactions from './components/RecentTransactions';
import ProductPerformance from './components/ProductPerformance';
import Blog from './components/Blog';
import MonthlyEarnings from './components/MonthlyEarnings';
import { LastSpents } from './components/LastSpents';
import NewSpentModal from './components/NewSpentModal';

const Dashboard = () => {

  const [updateRecentTransactions, setUpdateRecentTransactions] = useState(false);

  const handleFormSubmit = () => {
    setUpdateRecentTransactions(true); // Defina a prop "updateRecentTransactions" como true quando o formulário for enviado
  };

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={12}>
            <LastSpents update={updateRecentTransactions} />
          </Grid>
          <Grid item xs={12} lg={12}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>

        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
