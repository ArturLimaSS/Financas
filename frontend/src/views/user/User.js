import React from 'react';
import { Typography, Avatar, Card, CardContent, Button } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import Grid from '@mui/material/Unstable_Grid2';
import ProfileImg from 'src/assets/images/profile/user-1.jpg';


const UserPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Avatar
              src={ProfileImg}
              alt="Profile Picture"
              sx={{
                width: 100,
                height: 100,
                margin: '0 auto',
              }}
            />
            <Typography variant="h5" align="center" mt={2}>
              Artur Lima
            </Typography>
            <Typography variant="body1" align="center">
              Email: artur.lima@example.com
            </Typography>
            <Typography variant="body1" align="center">
              Data de Registro: 30 de Julho de 2023
            </Typography>
            {/* Adicione mais informações aqui */}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography variant='h5'>
              Preferências
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography variant='h5'>
              Redes Sociais
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} textAlign={'end'}>
        <Button variant="contained" color="error">
          Excluir minha conta
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserPage;