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


const RecentTransactions = ({ update }) => {

  const [spents, setSpents] = useState([]);

  useEffect(() => {
    if (update) {
      // Se a prop "update" for true, faça a requisição para obter os gastos recentes
      apiService.getSpents()
        .then((response) => {
          console.log("Dados da API:", response.data); // Verifique os dados retornados pela API
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
