import React from "react"
import { Switch, Route } from "react-router"
import Home from "./Home"
import Project from "./Projects"
import NavBar from "./Navigation"
import styled from "styled-components"
import NotFound from "./NotFound"
import About from "./About"
import Expertise from "./Expertise"
import Contact from "./Contact"

const Container = styled.main`
    color: #fff;
    background-color: #141e30;
    font-size: 20px;
`

const ComponentWrap = styled.div`
    @media screen and (max-width: 550px){
        padding-top: 10vmin !important;
    }

    padding-top: 5vmin;
    
    @media screen and (width: 768px){
        padding-top: 10vmax;
    }

    @media screen and (width: 1024px){
        padding-top: 10vmax;
    }

    @media screen and (min-width: 1400px){
        padding-top: 10vmin;
    }
`

interface RouteInterface{
    path:string;
    Component: React.FC;
}


const routes: Array<RouteInterface> = [
    {path:"/contact", Component: Contact},
    {path:"/expertise", Component: Expertise},
    {path:"/about", Component: About},
    {path:"/projects", Component: Project},
    {path:"/", Component: Home},
    {path:"*", Component: NotFound}
]

export const BaseLayout: React.FC = ()=>{
    return(
        <Container>
            <NavBar/>
            <ComponentWrap>
            <Switch>
                {routes.map(({path, Component}:{path: string, Component: React.FC})=>(
                    <Route key={path} exact path={path} component={Component}/>
                ))}
            </Switch>
            </ComponentWrap>
        </Container>
    )
}