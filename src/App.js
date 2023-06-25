import Swap from './components/Swap';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import styled from 'styled-components';
import "./components/hero.css";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type : y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: linear-gradient(180deg, #070925 0%, #01251f 100%);
  color: white;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Home/>
      <Swap/>
      <Dashboard/>
      <AboutUs/>
    </Container>
  );
}

export default App
