import React, { useRef } from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import MyWork from './components/MyWork/MyWork';
import Footer from './components/Footer/Footer';
import ArrowUp from './components/ArrowUp/ArrowUp';
import data from '../src/data/data.json';

const DivBody = styled.div`
  font-family: "Quicksand", sans-serif;
`;

const ContentStyles = styled.div`
  margin: 25px 15vw;

  h2 {
    font-size: 2rem;
    margin: 21px 0;
  }
  h3 {
    font-size: 1.4rem;
  }
  p {
    font-size: 1rem;
  }
`;

function App() {
  
  // Información extraída de data.json
  const dataProyectos = data.proyectos;
  const dataHabilidades = data.habilidades;
 
  return (

  <DivBody>
      
      <Header />
      <ContentStyles>
      <ArrowUp />
        <AboutMe />
        <MyWork dataProyectos={dataProyectos}/>
        <Skills dataHabilidades={dataHabilidades} />
        <Footer />
      </ContentStyles>
    </DivBody>
  );
}

export default App;
