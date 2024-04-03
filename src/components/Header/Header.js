import React from "react";
import styled from "styled-components";
import logoSvg from "../Header/HeaderLogo.svg"
import rightArrowSVG from "../../images/RightArrow.svg"




const HeaderDiv = styled.div`
    background: radial-gradient(circle, rgba(0,0,0,1) 75%, rgba(19,35,102,1) 96%);
    color: white;
    height: 54px;
    padding: 45px 0px;
    margin: 0;
    
`

const HeaderName =  styled.h2`
    font-size: 1.25rem;
    display: flex;
    align-items: center;
`

const HeaderNav = styled.nav`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 7vw; 
    

    a{
        text-decoration: none;
        color: white;
    }
`

const HeaderUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 13px;

  @media (max-width: 412px) {
    flex-direction: column;
    gap: 4px;
  }
`;
const Logo = logoSvg;

function Header () {

    return <>
    
    <HeaderDiv>
        <HeaderNav>
        <HeaderName>
                    <img src={logoSvg} alt="Logo" style={{ width: '36px' }} /> Mauricio Bautista
        </HeaderName>
            <HeaderUl>
                <li><a href="#">Sobre mi</a></li>
                <li><a href="#">Proyectos</a></li>
                <li><a href="#">Contáctame<img src={rightArrowSVG} alt="Logo" style={{ width: '16px' }} /></a></li>
            </HeaderUl>
        </HeaderNav>
    </HeaderDiv>

    </>

}

export default Header;