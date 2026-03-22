import { Box, Button, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Box
        sx={{
          textAlign: 'center',
          p: 4,
          bgcolor: 'background.paper',
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Typography component="h1" gutterBottom variant="h3">
          {t('welcome')}
        </Typography>
        <Typography color="text.secondary" mb={3} variant="body1">
          Bem-vindo à aplicação com tema baseado em bege, terracota e verde claro.
        </Typography>
        <Button color="primary" size="large" variant="contained">
          Iniciar
        </Button>
      </Box>
    </Container>
  );
}

export default App;
