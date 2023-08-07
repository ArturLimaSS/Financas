import React, { useEffect, useState } from 'react';
import { Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DashboardCard from '../../../components/shared/DashboardCard';
import Chart from 'react-apexcharts';
import { apiService } from 'src/api/api';
import { userId } from './UserId';

const SalesOverview = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        apiService.getDataToChart(userId())
            .then((response) => {
                setData(response.data);
            })
    }, [])

    // select
    const [month, setMonth] = React.useState('1');

    const handleChange = (event) => {
        setMonth(event.target.value);
    };

    const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });


    const datas = data.map((data) => data.date_only);

    // Convertendo os valores de gastos para números antes de formatá-los
    const values = data.map((value) => Number(value.total_spents));

    // chart color
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;

    // chart
    const optionscolumnchart = {
        chart: {
            type: 'bar',
            fontFamily: "'Plus Jakarta Sans', sans-serif;",
            foreColor: '#adb0bb',
            toolbar: {
                show: true,
            },
            height: 370,
        },
        colors: [primary, secondary],
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: '60%',
                columnWidth: '42%',
                borderRadius: [6],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all',
            },
        },

        stroke: {
            show: true,
            width: 5,
            lineCap: "butt",
            colors: ["transparent"],
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: 'rgba(0,0,0,0.1)',
            strokeDashArray: 3,
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        yaxis: {
            tickAmount: 4,
        },
        xaxis: {
            categories: datas.reverse(),
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
            fillSeriesColor: false,
        },
    };
    const seriescolumnchart = [
        {
            name: 'Gastos neste dia',
            data: values.reverse(),
        }
    ];

    return (

         <DashboardCard title="Visão Geral de Gastos" 
        //action={
        //     <Select
        //         labelId="month-dd"
        //         id="month-dd"
        //         value={month}
        //         size="small"
        //         onChange={handleChange}
        //     >
        //         {/* <MenuItem value={1}>March 2023</MenuItem>
        //         <MenuItem value={2}>April 2023</MenuItem>
        //         <MenuItem value={3}>May 2023</MenuItem> */}
        //     </Select>
        
        >
            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="bar"
                height="370px"
            />
        </DashboardCard>
    );
};

export default SalesOverview;
