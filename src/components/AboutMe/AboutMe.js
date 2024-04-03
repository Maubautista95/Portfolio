import React from "react";
import styled from "styled-components";
import fotoPerfil from "../../../src/images/Foto.jpeg"


const DivAbout = styled.div`

margin: 50px 0;
background-color: #ffffff;
display: flex;
justify-content: space-between; /* Alinear los elementos secundarios al principio y al final del contenedor */
align-items: center; /* Centrar verticalmente los elementos secundarios */
padding: 20px; /* Agregar un poco de espacio alrededor de los elementos secundarios */


@media (max-width: 420px){


    flex-direction: column;
    align-items: flex-start;    
    gap: 80px;
    padding: 0;
}

`

const DivDescription = styled.div`
    flex-grow: 1;
    max-width: 50%;
    display: grid;
    grid-gap: 1rem;

    @media (max-width: 420px){


        max-width: 100%;
    
    }
`
const DivPicture = styled.div`

    flex-grow: 1;
    text-align: center;
    max-width: 50%;

    @media (max-width: 420px){


        max-width: 90%;
    
    }
    
    
    
`
const Picture = styled.img`

    width: 21vw;
    border: 7px solid transparent; 
    border-image: radial-gradient(circle, rgba(0,0,0,1) 75%, rgba(19,35,102,1) 96%) 1;
    
    
    @media (max-width: 420px){


        width: 70vw;
        text-align: center;
    
    }

`



function AboutMe() {

    return <>
        <DivAbout>
            <DivDescription>
                <h2>Soy Mauricio Bautista. Bienvenido a mi perfil.</h2>
                <h3>¿Quién soy, cuál es mi historia?</h3>
                <p>Soy un estudiante apasionado de Desarrollo de Software, actualmente me estoy titulando en un associate's 
                    degree en desarrollo de software. Hablo tanto español como inglés y he completado el Bootcamp Oracle ONE.
                    Mi entusiasmo por la tecnología y mi dedicación al aprendizaje me están convirtiendo en un prometedor profesional en el campo
                    del desarrollo de software 🚀.</p>
                <p>Empecé como un estudiante común y corriente con algo de afinidad al inglés, lo cuál me llevó a participar en empleos de servicio
                    al cliente, y a ser autodidacta para aprender sobre Wordpress, HTML, CSS, JavaScript, y React, todo con ayuda de Oracle y su
                    programa Next Education y claro, con mi propio esmero y disciplina en el entendimiento de conceptos clave.
                </p>
            </DivDescription>
            <DivPicture>
                <Picture src={fotoPerfil} alt="Picture of myself / Mi foto de perfil" />
            </DivPicture>
        </DivAbout>


    </>
}

export default AboutMe;