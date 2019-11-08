import React from "react"
import styled from "styled-components"
import react from "../styles/react.svg"
import python from "../styles/python.svg"
import javascript from "../styles/js.svg"
import django from "../styles/django.svg"
import typescript from "../styles/typescript.svg"
import docker from "../styles/docker.svg"


const AboutWrapper = styled.section`
    display: flex;
    padding: 0px 15px;
    align-items: center;
    justify-content: center;
    // padding-top: 90px;
    flex-direction:column;
    h2, h4{
        color: #D8A31A;
        margin-bottom: 5px;
    }
    

    p, h4{
        width: 700px;
        max-width: 100%;
    }

    .languages{

        display: flex;
        justify-content: center;
        width: 700px;
        max-width: 100%;
        flex-wrap: wrap;
        
        div.lang{
            @media screen and (max-width: 550px){
                width: 100% !important;
            }
            margin: 10px;
            width: 200px;
            text-align: center;
            display: flex;
            background-color: rgb(0,72,99);
            padding: 10px 0;
            align-items: center;
            img.lang-img{
                height: 30px;
                width: 30%;
            }

            p{
                margin:0;
                color: #D8A31A;
                font-size: 17px;
            }
        }

        div.lang:hover{
            cursor: pointer;
            background-color: rgb(0, 56, 77);
        }
    }
`

const About : React.FC = ()=>{
    return(
        <AboutWrapper>
            <h2>About Me</h2>
            <p>Am a " <strong>Web Developer / Python Engineer</strong> ", with experience in writing dynamic
            Applications / Webapps and building sites for clients, I automate simple tasks for 
            myself and other developers and build Web scrapers to fetch me content .</p>
            <p>Using Django, React / Next.js and technologies like <strong>REST / GRAPHQL</strong>, I can build sites with 
                lots of functionalities using these technologies .</p>
            <h4>Languages / FrameWorks</h4>
            <div className="languages">
                <div className="lang">
                    <img className="lang-img" alt="language" src={javascript}/>
                    <p>JavaScript</p>
                </div>
                <div className="lang">
                    <img className="lang-img" alt="language" src={python}/>
                    <p>Python</p>
                </div>
                <div className="lang">
                    <img className="lang-img" alt="language" src={typescript}/>
                    <p>TypeScript</p>
                </div>
                <div className="lang">
                    <img className="lang-img" alt="language" src={django}/>
                    <p>Django</p>
                </div>
                <div className="lang">
                    <img className="lang-img" alt="language" src={docker}/>
                    <p>Docker</p>
                </div>
                <div className="lang">
                    <img className="lang-img" alt="language" src={react}/>
                    <p>React.js</p>
                </div>
            </div>
        </AboutWrapper>
    )
}

export default About