import React from "react"
import '../styles/home.css'
import styled from "styled-components"
import profile from "../styles/profile.jpg"
import { useHistory } from "react-router"


const HomeContainer = styled.section`
    // height: 100vh;
    padding: 15px;
    padding-top: 95px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;

    p.home-description{
        width: 700px;
        max-width: 100%;
    }

    h1.header-text{
        margin-bottom: 10px;
        font-size: 2.5rem;
        letter-spacing: 1px;
        color: #D8A31A;

    }

    img.portfolio-image{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }

    div.cta-wrapper{
        text-align: center;
        max-width: 100%;
    }

    button.cta{
        padding: 18px;
        width: 300px;
        background-color:rgb(0,72,99);
        color: #fff;
        border-color: rgb(0,72,99) !important;
        border-bottom: none !important;
        border-right: none !important;
        margin: 10px 10px;
        // border-radius: 30px;
        max-width: 100%;
        font-size: 18px;
        border: 3px solid rgb(0,72,99) !important;
    }

    button.cta:hover{
        cursor: pointer;
        background-color: rgb(0, 56, 77);
        border: 3px solid #D8A31A !important;
        color: #D8A31A;
    }
`

const Home : React.FC = ()=>{
    let history = useHistory()
    return (
        <HomeContainer>
            <img className="portfolio-image" alt="profile" src={profile} />
            <h1 className="header-text">Halo! I'm <span className="name">Ibaakee Ledum</span></h1>
            <p className="home-description">I'm a Fullstack Web Developer with a lots of experiences 
            in Django, React and GraphQL . I love coding because it helps in
             solving problems...
            </p>
            <div className="cta-wrapper">
                <button onClick={()=>history.push("/contact")} className="cta btn">
                    Have any project in mind ?
                </button>
                <button onClick={()=>history.push("/projects")} className="cta btn">
                    View Projects
                </button>
            </div>
            
        </HomeContainer>
    )
}

export default Home