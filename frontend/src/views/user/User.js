import React, { useEffect, useState } from 'react';
import { Typography, Avatar, Card, CardContent, Button } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import Grid from '@mui/material/Unstable_Grid2';
import ProfileImg from 'src/assets/images/profile/user-1.jpg';
import { apiService } from 'src/api/api';
import { Preferences } from './Components/Preferences';
const UserPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    apiService.getUser(localStorage.getItem('user_id'))
      .then((response) => {
        setUser(response.data)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div key={user.id}>
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
                {user.name}
              </Typography>
                <Typography variant="body1" align="center">
                  Email: {user.email}
                </Typography>
                <Typography variant="body1" align="center">
                  Data de Registro: {user.created_at}
                </Typography>
                {/* Adicione mais informações aqui */}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <Typography variant='h5'>
                  
                  <Preferences />
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
      </div>
    </>
  );
};

export default UserPage;