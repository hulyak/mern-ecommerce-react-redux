import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomeScreen from './components/Screens/HomeScreen';

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
         <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
