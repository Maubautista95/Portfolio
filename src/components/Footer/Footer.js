import React from "react";
import styled from "styled-components";
import CopyToClipboard from 'react-copy-to-clipboard';
import WhatsAppIcon from "../../images/WhatsAppIcon.svg"
import LinkedInLogo from "../../images/LinkedIn.svg"
import CopyLogo from "../../images/CopyIcon.svg";




const DivFooter = styled.div`
    margin-top: 100px;
    margin: 100px -15vw 0 -15vw;
    padding: 0 15vw;
    height: 300px;
    background: radial-gradient(circle, rgba(0,0,0,1) 75%, rgba(19,35,102,1) 96%);
    color: white;
    
    h2{
        text-align: center;
        padding: 20px 0;

    }

    @media (max-width: 415px){

        height: 500px;

    }

`

const DivContact = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    text-align: center;

    h3{
        padding: 15px 0;
    }

    img{

        width: 2rem;
        margin: 4px;

    }

    img:hover{
        
        cursor: pointer;

    }

    a{
        text-decoration: none;
        color: white;
    }

    @media (max-width: 810px){

        padding-bottom: 30px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    }

   

`

function Footer (){


    return <>

        <DivFooter>
            <h2>Contáctame</h2>
           
            <DivContact>
                <div>
                    <h3>Email</h3>
                    <a href="mailto:tucorreo@ejemplo.com">mbautistarubiano@gmail.com</a>
                </div>

                <div>
                    <h3>Social Media</h3>
                    <a href="https://www.linkedin.com/in/mauricio-bautista-rubiano-developer/" target="_blank" ><img src ={LinkedInLogo} style={{ marginTop: "-5px"}}></img></a>
                </div>

                <div>
                    <h3>WhatsApp/Phone</h3>

                    <a href="https://api.whatsapp.com/send?phone=573195453882&text=Hola%2C%20te%20contacto%20desde%20tu%20sitio%20web" target="_blank">
                        <img src={WhatsAppIcon} alt="Copy Phone Number" />
                    </a>

                    <CopyToClipboard text="+573195453882" onCopy={() => alert("El número ha sido copiado / Phone number has been copied to your clipboard!")}>
                    <img src={CopyLogo} alt="Logo de WhatsApp" />
                    </CopyToClipboard>
                   </div>

            </DivContact>

        </DivFooter>  
        
    </>
}

export default Footer;