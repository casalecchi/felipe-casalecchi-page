import { Container } from '@mui/material';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <NavBar />
      </Container>
      <Footer />
    </>
  );
}

export default App;
