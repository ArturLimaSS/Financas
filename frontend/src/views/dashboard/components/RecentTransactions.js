import React, { useEffect, useState } from 'react';
import DashboardCard from '../../../components/shared/DashboardCard';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from '@mui/lab';
import { Link, Typography } from '@mui/material';
import { apiService } from 'src/api/api';
import { userId } from './UserId';

const RecentTransactions = ({ update }) => {

  const [spents, setSpents] = useState([]);

  useEffect(() => {
    if (update) {
      apiService.getSpents(userId())
        .then((response) => {
          console.log("Dados da API:", response.data); 
          setSpents(response.data);
        })
        .catch((error) => console.error("Erro", error))
    }
  }, [update]);

  return (
    <DashboardCard title="Gastos Recentes">
      <>
        <ul>
        {Array.isArray(spents) && spents.length > 0 ? (
          spents.map((spent) => (
            <li key={spent.id}>{spent.title}</li>
          ))
        ) : (
          <li>Nenhum gasto recente encontrado.</li>
        )}
        </ul>
      </>
    </DashboardCard>
  );
};

export default RecentTransactions;
