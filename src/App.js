import React, { useRef } from 'react';
import styled from 'styled-components';
import LanguageTopBar from './components/LanguageTopBar/LanguageTopBar';
import PageSpanish from './components/Pages/PageSpanish/PageSpanish';
import PageEnglish from './components/Pages/PageEnglish/PageEnglish';
import data from "./data/data.json"
import dataEnglish from "./data/dataEnglish.json"
import ArrowUp from "../src/components/ArrowUp/ArrowUp"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const DivBody = styled.div`
  font-family: "Quicksand", sans-serif;
`;



function App() {

  // Información extraída de data.json




  return (

    <>
      <DivBody>
      <ArrowUp />
        <LanguageTopBar></LanguageTopBar>
        <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<PageSpanish data={data} />} />
          <Route path="/en" element={<PageEnglish data={dataEnglish} />} />
          
        </Routes>
          
        </BrowserRouter>
        
      </DivBody>
      
    </>
  );
}

export default App;
