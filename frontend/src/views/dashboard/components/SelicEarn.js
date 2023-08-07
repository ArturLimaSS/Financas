import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, Avatar } from '@mui/material';
import { IconArrowUpLeft } from '@tabler/icons';
import { apiService } from 'src/api/api';
import { userId } from './UserId';
import DashboardCard from '../../../components/shared/DashboardCard';
import { SelicApi } from 'src/api/api';


const SelicEarn = () => {
  const [total, setTotal] = useState(0);
  const dataSelic = {"start" : "06/07/2023", "end": "07/07/2023"}
  useEffect(() => {
    apiService.getSpents(userId())
      .then((response) => {
        console.log(response.data)
        const totalSpents = response.data.reduce((acc, curr) => acc + parseFloat(curr.value), 0);
        setTotal(totalSpents)
      })
    SelicApi.getSelicData(dataSelic)
    .then((responseSelic) => {
      console.log(responseSelic)
    })
  }, [])

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = '#ecf2ff';
  const successlight = theme.palette.success.light;

  // chart
  const optionscolumnchart = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: [primary, primarylight, '#F9F9FD'],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
          background: 'transparent',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };
  const totalBudget = 250;
  const remainAmout = totalBudget - total;
  const percentAchieved = (total / totalBudget) * 100;
  const seriescolumnchart = [total, totalBudget - total];
  return (
    <DashboardCard title="Rendimento em caso de investimento na selic">
      <Grid container spacing={3}>
        {/* column */}
        <Grid item xs={7} sm={7}>
          <Typography variant="h3" fontWeight="700">
            {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </Typography>
          <Stack direction="row" spacing={1} mt={1} alignItems="center">
            
            <Typography variant="subtitle2" fontWeight="600">
              {percentAchieved}%
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Atingido
            </Typography>
          </Stack>
          
        </Grid>
        {/* column */}
        <Grid item xs={5} sm={5}>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="donut"
            height="150px"
          />
        </Grid>
      </Grid>

    </DashboardCard>
  );
};

export default SelicEarn;
