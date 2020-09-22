import React from "react"
import styled from "styled-components"
import webIcon from "../static/web.svg"
import scrapeIcon from "../static/scrape.svg"
import dataIcon from "../static/data.svg"
import cloudIcon from "../static/cloud.svg"
import autoIcon from "../static/automation.svg"


const ExpertWrapper = styled.section`
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    // padding-top: 80px;
    font-size: 15px;
    letter-spacing: 1px;
    h2.main-heading{
        color:#D8A31A;
        font-size: 1.5rem;
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
        background-color: #2b3444;
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
    window.scrollTo(0,0);
    return(
        <ExpertWrapper>
            <h2 className="main-heading"> Areas of Expertise </h2>
            <Content>
                <div className="content">
                    <img src={webIcon} alt="Backend / Frontend Development"/>
                    <h3>Python Web Development</h3>
                    <p>Over the years I have worked with javascript 
                        and Python using Web frameworks like Django, Flask and Tornado.
                        I have written API driven applications using Django-REST-Framework and React,
                        I have worked with GatsbyJS.
                    </p>
                </div>
                <div className="content">
                    <img src={scrapeIcon} alt="Web Scraping"/>
                    <h3>Web Scraping</h3>
                    <p>
                        Using Scrapy, Selenium and BeatifulSoup, 
                        I have been able to scrape data from the various input sources. One of the powerful thing 
                        that the Python language offers is it's versatility, I have been able
                        to scrape data for myself and clients.
                    </p>
                </div>
                <div className="content">
                    <img src={dataIcon} alt="Data Analysis"/>
                    <h3>Data Analysis</h3>
                    <p>Pandas, Numpy and Keras are good libraries I use for data analysis and creating data models.
                        Data Analysis offers you insight into any form of collective data you might have 
                        and with charting libraries like Plotly, Matplotlib, Bokeh and Chart.js, visualizing your
                        data is no more a problem.
                    </p>
                </div>
            </Content>
        </ExpertWrapper>
    )
}

export default Expertise