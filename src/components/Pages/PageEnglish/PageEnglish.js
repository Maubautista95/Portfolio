import React from "react";
import styled from "styled-components";
import Header from "../../Header/Header"
import AboutMe from '../../AboutMe/AboutMe';
import Skills from '../../Skills/Skills';
import MyWork from '../../MyWork/MyWork';
import Footer from '../../Footer/Footer';


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


function PageEnglish({data}) {


    const dataHeader = data.header;
    const dataProyectos = data.proyectos;
    const dataHabilidades = data.habilidades;
    const dataMyWork = data.myWork;
    const dataSkills = data.skills;
    const dataContact = data.contact;
    const dataAboutMe =  data.aboutMe;

    return <>

        
        <Header dataHeader={dataHeader} />
        <ContentStyles>
            <AboutMe dataAboutMe={dataAboutMe} />
            <MyWork dataProyectos={dataProyectos} dataMyWork={dataMyWork} />
            <Skills dataHabilidades={dataHabilidades} dataSkills={dataSkills} />
            <Footer dataContact={dataContact} />
        </ContentStyles>

    </>

}




export default PageEnglish;


