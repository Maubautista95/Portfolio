import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import MyWork from './components/MyWork/MyWork';
import Footer from './components/Footer/Footer';
import data from '../src/data/data.json'



const DivBody = styled.div`

font-family: "Quicksand", sans-serif;

`



const ContentStyles = styled.div`

  margin: 25px 15vw;

  h2{
    font-size: 2rem;
    margin: 21px 0;
  }
  h3{
    font-size: 1.4rem;
  }
  p{
    font-size: 1rem;
  }


`

function App() {


  const dataProyectos = data.proyectos;
  const dataHabilidades = data.habilidades;
  

  return (
    <DivBody>
    <Header></Header>
    <ContentStyles>

      <AboutMe></AboutMe>
      <MyWork dataProyectos = {dataProyectos} />
      <Skills dataHabilidades = {dataHabilidades} />
      <Footer></Footer>

    </ContentStyles>
    </DivBody>
  );
}

export default App;
