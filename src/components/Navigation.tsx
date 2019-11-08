import React from "react"
import styled, { CSSProperties } from "styled-components"
import { NavLink } from "react-router-dom"


const BigScreenNavigation = styled.nav`

    @media screen and (min-width: 768px){
        display: flex !important;
    }

    padding: 20px;
    display: none;
    // position: absolute;
    justify-content: flex-end;
    // right:0;
    // width: 100%;
    font-size: 19px;
    ul{
        display: inline-flex;
        list-style: none;
    }
    
    li{
        margin: 0 25px;
    }
    li:hover{
        opacity: 0.8;
    }
    a{
        color: inherit;
        text-decoration: none;
    }

    .active{
        // opacity: 0.7;
        color: #D8A31A;
    }
`


const SmallScreenNavigation = styled.nav`
    @media screen and (min-width: 767px){
        display: none !important;
    }
    background-color: rgba(0,72,99, 0.8);
    ul{
        display: inline-flex;
        list-style: none;
        padding: 0px;
        justify-content: space-around;
        width: 100%;
        margin:0;
        padding: 20px 0px;
        a{
            color: #D8A31A;
        }
    }

    li{
        font-size: calc(15px + 0.5vmin);
    }
`

const header = {
    position: "sticky",
    top: "0px",
    zIndex: 200000
} as CSSProperties

const NavBar: React.FC = () =>{
    return (
        <header className="nav-header" style={header}>
            <BigScreenNavigation>
                <ul>
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/expertise">Expertise</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Featured Works</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Reach Me</NavLink>
                    </li>
                </ul>
            </BigScreenNavigation>
            <SmallScreenNavigation>
            <ul>
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/expertise">Expertise</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Featured</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </SmallScreenNavigation>
        </header>
    )
}


export default NavBar;