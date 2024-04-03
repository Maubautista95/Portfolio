import React from "react";
import styled from "styled-components";
import imageSpace from "../../images/OutterSpace.jpg"
import WorkCard from "../WorkCard/WorkCard";


const DivBackGround = styled.div`
    background-image: url(${imageSpace});
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    margin: 0 -15vw;
    padding: 0 15vw 70px 15vw;
    text-align: center;
    

    h2{
        padding: 40px 0 0 0;
    }

    p{
        padding: 40px 0;
    }
    

`

const DivWorks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    padding-bottom: 45px;
    justify-items: center; 
    align-items: center;
    
    div{
        height: 200px;
        width: 33vw;
        
    }

    @media (max-width: 810px){

        grid-template-columns: 3fr;
        margin: 0 auto;

        div{

            width: 60vw;
        }

    }
`

function MyWork ({dataProyectos}){

    

    return <>
    
    
    <DivBackGround>

    <h2> Apps y proyectos realizados</h2>
    <p>Un compendio de los trabajos que con el tiempo he realizado</p>

    <DivWorks>
          {dataProyectos.map(proyecto => (
            <WorkCard key={proyecto.nombre} data={proyecto} /> // Pass data as prop
          ))}
    </DivWorks>
    </DivBackGround>
    </>


}

export default MyWork;