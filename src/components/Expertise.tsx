import React from "react"
import styled from "styled-components"
import webIcon from "../styles/web.svg"
import scrapeIcon from "../styles/scrape.svg"
import dataIcon from "../styles/data.svg"
import cloudIcon from "../styles/cloud.svg"


const ExpertWrapper = styled.section`
    // height: 100vh;
    padding: 15px;
    display: flex;
    flex-direction: column;
    // justify-content:center;
    align-items:center;
    padding-top: 80px;
    font-size: 15px;
    letter-spacing: 1px;
    h1{
        color:#D8A31A;
        font-size: 2rem;
    }
`

const Content = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
    flex-wrap: wrap;

    div.content{
        box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
        width: 350px;
        display: flex;
        flex-direction: column;
        align-items:center;
        padding: 15px;
        max-width: 100%;
        margin: 10px;
        h3{
            text-align: center;
        }

        img{
            height: 40px;
            width: 40px;
        }
    }

    h3{
        margin: 5px 0;
    }

    div.content:hover{
        cursor: pointer;
        box-shadow: 0 3px 10px rgba(0, 0, 0, .6);
    }
`

const Expertise : React.FC = ()=>{
    return(
        <ExpertWrapper>
            <h1> Areas of Expertise </h1>
            <Content>
                <div className="content">
                    <img src={webIcon} alt="Web Development"/>
                    <h3>Web Development</h3>
                    <p>Using my knowledge of Django, React and GraphQL / REST, I have been able to build
                        Single page Applications(SPA's), Static sites and also dynamic sites depending on 
                        the needs of the users .
                    </p>
                </div>
                <div className="content">
                    <img src={scrapeIcon} alt="Web Scraping"/>
                    <h3>Web Scraping</h3>
                    <p>One of the powerful thing that the Python language offers is it's versatility,
                        with Python and libraries like request, urllib and scrapy/ selenium, I have been able
                        to scrape data from the internet for personal uses mostly and also for commercial
                        applications like Ecommerce, e.t.c .
                    </p>
                </div>
                <div className="content">
                    <img src={dataIcon} alt="Data Analysis"/>
                    <h3>Data Analysis</h3>
                    <p>Pandas, Numpy and Keras are good libraries I use for data analysis and creating
                        models for later use. Data Analysis offers you insight into ur business and with
                        charting libraries like Plotly, Matplotlib, Bokeh and Chart.js, visualizing your
                        data is no more a problem .
                    </p>
                </div>
                <div className="content">
                    <img src={dataIcon} alt="Data Analysis"/>
                    <h3>Automation Scripts</h3>
                    <p>Using Python and Javascript I can write automation scripts for clients to ease 
                        their workflow and save time, you have the idea: I implement ( Am not God ooo!!! ).
                    </p>
                </div>
                <div className="content">
                    <img src={cloudIcon} alt="Data Analysis"/>
                    <h3>Server Side Solutions</h3>
                    <p>I use server side technologies to ease the stress of deploying to a live server, 
                        Also Run Continous Tests with Platforms like CircleCI .
                    </p>
                </div>
            </Content>
        </ExpertWrapper>
    )
}

export default Expertise