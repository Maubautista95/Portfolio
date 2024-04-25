import React from "react";
import styled from "styled-components";
import LogoEnglish from "../../images/UkFlag.svg"
import LogoSpanish from "../../images/SpainFlag.svg"

const StyledTopBar = styled.div`
background: radial-gradient(circle, rgba(0, 0, 0, 1) 75%, rgba(19, 35, 102, 1) 96%);
display: flex;
justify-content: center;
gap: 15px;
padding-top: 15px;

img{
    width: 30px;
}

`


function LanguageTopBar(){

    return <>

    <StyledTopBar id="LanguageTopBar">
        
        <a href="/"><img src={LogoSpanish}/></a>
        <a href="/en"><img src={LogoEnglish}/></a>
        


    </StyledTopBar>
    
    </>

}

export default LanguageTopBar;
