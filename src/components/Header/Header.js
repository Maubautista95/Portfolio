import React, { useRef } from 'react';
import styled from 'styled-components';
import logoSvg from "../Header/HeaderLogo.svg";
import rightArrowSVG from "../../images/RightArrow.svg";
import { Link } from 'react-scroll';


const HeaderDiv = styled.div`
  background: radial-gradient(circle, rgba(0, 0, 0, 1) 75%, rgba(19, 35, 102, 1) 96%);
  color: white;
  height: 54px;
  padding: 45px 0px;
  margin: 0;
`;

const HeaderName = styled.h2`
  font-size: 1.25rem;
  display: flex;
  align-items: center;
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 7vw;

  a {
    text-decoration: none;
    color: white;
  }
`;

const HeaderUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 13px;
  
  
  a {
    color: white;
    transition: 2s;
  }

  li > a:hover {
    color: lightgrey;
    font-size: 1.1rem;
    cursor: pointer;
  }

  @media (max-width: 412px) {
    flex-direction: column;
    gap: 4px;
  }
`;

const Logo = logoSvg;

function Header({dataHeader}) {




    return (
        <HeaderDiv id="header">
          
            <HeaderNav>
                <a href={dataHeader.homeLink}>
                <HeaderName>
                    <img src={logoSvg} alt="Logo" style={{ width: '36px' }} /> Mauricio Bautista
                </HeaderName>

                </a>

                
                <HeaderUl>
                    <li><a href="#">{dataHeader.aboutMe}</a></li>
                    <li>
                        <Link
                        activeClass="active"
                        to="MyWork"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}   
                    >
                        {dataHeader.projects}
                    </Link>
                    </li>
                    <li>
                        <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}   
                    >
                        {dataHeader.skills}
                    </Link>
                    </li>
                    <li><Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}>{dataHeader.contact}<img src={rightArrowSVG} alt="Logo" style={{ width: '16px' }} /></Link></li>
                </HeaderUl>
            </HeaderNav>
            
        </HeaderDiv>
    );
}

export default Header;
