import React from "react";
import styled from "styled-components";


const DivSkills = styled.div`

    color: white;     
    display: grid;
    grid-template-columns: 1fr 1fr; /* Dos columnas de igual ancho */
    grid-gap: 10px;
    
    
    div{

        background: radial-gradient(circle, rgba(0,0,0,1) 75%, rgba(19,35,102,1) 96%);
        height: 55px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;

    }

    h2{
        text-align: center;
    }
`


function Skills ({dataHabilidades}){


console.log(dataHabilidades)


return <>

    <h2 style={{ textAlign: "center", padding: "1.5rem 0"}}>Mis habilidades</h2>
    
    <DivSkills>

    {dataHabilidades.map(habilidad => (
          <div key={habilidad.nombre}> {habilidad.nombre} </div>
        ))}
        


    </DivSkills>

</>


}

export default Skills;