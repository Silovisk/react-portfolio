import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import { HashRouter as Router } from "react-router-dom"; // Mudança para HashRouter

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Router>
      <Container>
        <Hero />
        <Who />
        <Contact />
      </Container>
    </Router>
  );
}

export default App;
