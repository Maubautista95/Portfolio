import React from "react";
import styled from "styled-components";
import ArrowUpIcon from "../../images/ArrowUpIcon.svg"
import { Link } from "react-scroll";


const StyledArrowDiv= styled.div`
    background: radial-gradient(circle, rgba(245,245,220, 0.75) 0%, rgba(19,35,102, 0.6) 97%);
    border: 4px solid #6293a4;
    height: 55px;
    width: 55px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 65px;
    right: 50px;
    transition: 0.8s;

    &:hover{

        cursor: pointer;
        border-color: white;
        
    }

    img{
        height: 25px;
        transition: 0.8s;   
    }

    img:hover{

        cursor: pointer;
        height: 35px

    }

    @media (max-width: 412px){

        bottom: 65px;
        left 50px;
    }


`

function ArrowUp (){


return <> 

<Link
                        activeClass="active"
                        to="header"
                        spy={true}
                        smooth={true}
                        duration={700}   
                    >
                        
                    
<StyledArrowDiv>

    
<img src={ArrowUpIcon}></img>

</StyledArrowDiv>

</Link>
</>
}

export default ArrowUp