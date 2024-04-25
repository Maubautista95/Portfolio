import React from "react";
import styled from "styled-components";


const DivWorkCard = styled.div`


background: radial-gradient(circle, rgba(245,245,220, 0.75) 0%, rgba(19,35,102, 0.6) 97%);
min-height: 440px;
padding: 15px;
padding-bottom: 25px;
border: 4px solid #6293a4;
border-radius: 3px;
color: white;
transition: all 1.2s;
display: flex;
flex-direction: column;

gap: 40px;


&:hover{
 
  border: 4px solid white;
  
  
  img{

    
    max-height: 105%;
  
  }
}

img{

    margin: 10px auto;
    max-width: 60%;
    max-height: 99%;  
    transition: all 2s ease-in-out;
    
}



h3{

    font-size: 28px;
    padding: 7px 0;

}




media (max-width: 810px){

  min-width: 70vw;  
  
}

`

const DivInfo = styled.div`

display: flex;  
flex-direction: column;
align-items: center;
padding: 10px 0;
text-align: left;
margin: 3px 0 135px 0;
flex-grow: 1;


p{
    padding: 20px;
    text-align: center;
}



`

const DivWorkButtons = styled.div`


display: flex;
justify-content: space-around;
align-items: center;
max-height: 80px;
padding-bottom: 30px;
flex-grow: 1;

button {
    margin: 0 auto;
    height: 50px;
    width: 100px;
    background-color: rgba(37, 68, 88, 1); 
    color: white;
    font-size: 1rem;
    border-radius: 4px;
    transition: 0.7s;
    border: 1px solid black;
    border-top: 1px solid black !important; 
  }
  
  button:hover {
    background-color: rgba(240, 180, 130, 0.45); 
  }

  
  


`


function WorkCard ( {data, dataMyWork} ){




return<>



<DivWorkCard>


  <DivInfo>

    <h3>{data.nombre}</h3>
    <img src={data.urlImagen} ></img>
    <div>
    <p>{data.descripcion}</p>
    </div>

  </DivInfo>

  <DivWorkButtons>

    <a href={data.urlRepo} target="_blank"><button>Repo</button></a>
    <a href={data.urlDeploy} target="_blank"><button>{dataMyWork.deployed}</button></a>

  </DivWorkButtons>

</DivWorkCard>
</>



}

export default WorkCard;