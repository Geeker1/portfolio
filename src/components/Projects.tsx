import React from "react"
import styled from "styled-components"
import arsemio from "../static/arsemio.png"
import cureator from "../static/cureator.png"
import web_agency from "../static/web-agency.png"
import dig_agency from "../static/dig-agency.png"


const ProjectWrapper = styled.section`
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    // padding-top: 80px;
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
    window.scrollTo(0,0);
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
                <ProjectItem className="project-item">
                    <div className="bg-img"></div>
                    <div className="content">
                    <h3>Pageant Site</h3>
                    <p>A simple mockup web app for a beauty pageant contest.
                    </p>
                    <a href="https://thirsty-khorana-15d84c.netlify.com/" target="_blank" rel="noopener noreferrer" className="btn">Visit Site</a>
                    </div>
                </ProjectItem>
                <ProjectItem className="project-item">
                    <div className="bg-img"></div>
                    <div className="content">
                    <h3>E-learning Platform</h3>
                    <p>An E-learning platform built with Django but used with colorLib's templates.
                    </p>
                    <a href="https://hydrak.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn">Visit Site</a>
                    </div>
                </ProjectItem>
                <ProjectItem className="project-item">
                    <div className="bg-img"></div>
                    <div className="content">
                    <h3>E-learning Site mockup</h3>
                    <p>A simple mockup for JeffTutors E-learning platform.
                    </p>
                    <a href="https://boring-poitras-790fd7.netlify.com/" target="_blank" rel="noopener noreferrer" className="btn">Visit Site</a>
                    </div>
                </ProjectItem>
                
            </div>
            <a href="https://github.com/geeker1" target="_blank" rel="noopener noreferrer" className="btn cta">
                More Projects Here
            </a>
        </ProjectWrapper>
    )
}

export default Project

