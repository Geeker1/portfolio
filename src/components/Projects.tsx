import React from "react"
import styled from "styled-components"
import arsemio from "../styles/arsemio.png"
import cureator from "../styles/cureator.png"
import web_agency from "../styles/web-agency.png"
import dig_agency from "../styles/dig-agency.png"


const ProjectWrapper = styled.section`
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items:center;
    padding-top: 80px;
    font-size: 15px;
    letter-spacing: 1px;
    h2.main-heading{
        color:#D8A31A;
        font-size: 1.5rem;
    }

    .cta{
        padding: 10px;
        background-color: rgba(0,72,99,1);
    }

    .cta:hover{
        background-color: rgba(0,72,99,0.4);
    }

    div.projects{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 1000px;
        max-width: 100%;
        
    }
`

const ProjectItem = styled.div`
    &.project-item{
        width: 300px;
        height: 200px;
        background-color: #000;
        text-align: center;
        margin: 10px;
        max-width: 100%;
        // filter: brightness(0.4);
        position: relative;
        color: #fff;

        .bg-img{
            position: absolute;
            top: 0;
            left:0;
            width: 100%;
            height: 100%;
            background-image: url(${props =>  props.defaultValue });
            filter: brightness(0.4);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: right 50% top -50px;
        }

        .content{
            position: absolute;
        }

        h3{
            color: #D8A31A;
        }
        

        a{text-decoration: none;}

        .btn{
            padding: 10px;
            background-color: rgb(0,72,99);
        }
        p{font-size: 15px; padding: 0 5px; margin-bottom: 15px;}
        .btn:hover{
            background-color: #141e30;
        }
        box-shadow: 0 1px 6px rgba(0, 0, 0, .6);
        
    }
    &.project-item:hover{
        cursor: pointer;
        // filter: brightness(0.8);
        box-shadow: 0 5px 10px rgba(0, 0, 0, .6);
    }
`



const Project : React.FC = ()=>{
    return (
        <ProjectWrapper>
            <h2 className="main-heading">Recent Projects</h2>
            <div className="projects">
                <ProjectItem defaultValue={arsemio} className="project-item">
                    <div className="bg-img"></div>
                    <div className="content">
                        <h3>Arsemio Tech</h3>
                        <p>A telecomms company with expertise in CCTV installations, cabling 
                            and Router / Radio installations.
                        </p>
                        <a href="https://arsemiotech.com" target="_blank" rel="noopener noreferrer" className="btn">Visit Site</a>
                    </div>
                </ProjectItem>
                <ProjectItem defaultValue={cureator} className="project-item">
                    <div className="bg-img"></div>
                    <div className="content">
                        <h3>Cureator</h3>
                        <p>A project aimed at helping people find products
                            online without the normal hassle of searching through online stores .
                        </p>
                        <a href="https://musing-bohr-39d282.netlify.com/cureator/templates/home.html" 
                        target="_blank" rel="noopener noreferrer" className="btn">Visit Site</a>
                    </div>
                    
                </ProjectItem>
                <ProjectItem defaultValue={web_agency} className="project-item">
                    <div className="bg-img"></div>
                    <div className="content">
                        <h3>Froxine Tech</h3>
                        <p>A Web Agency aimed at helping ease the stress of deploying web apps and
                             mobile apps for clients, they engage in web scraping and data analysis also .
                        </p>
                        <a href="https://nervous-mahavira-208782.netlify.com/agency/templates/web.html" 
                        target="_blank" rel="noopener noreferrer" className="btn">Visit Site</a>
                    </div>
                </ProjectItem>
                <ProjectItem defaultValue={dig_agency} className="project-item">
                    <div className="bg-img"></div>
                    <div className="content">
                        <h3>Market Place NG</h3>
                        <p>A Digital Agency for a marketing company to help in driving traffic and leads for 
                            potential clients.
                        </p>
                        <a href="https://nervous-mahavira-208782.netlify.com/agency/templates/home.html" 
                        target="_blank" rel="noopener noreferrer" className="btn">Visit Site</a>
                    </div>
                </ProjectItem>
                {/* <ProjectItem className="project-item">
                    <div className="bg-img"></div>
                    <div className="content">
                    <h3>Fx Planner</h3>
                    <p>A simple Dashboard forex app for helping users stick to the trading plans they set
                         and watch for price alerts.
                    </p>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="btn">Visit Site</a>
                    </div>
                </ProjectItem> */}
            </div>
            <a href="https://github.com/geeker1" target="_blank" rel="noopener noreferrer" className="btn cta">
                More Projects Here
            </a>
        </ProjectWrapper>
    )
}

export default Project

