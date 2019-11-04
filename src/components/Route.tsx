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

export const BaseLayout: React.FC = ()=>{
    return(
        <Container>
            <NavBar/>
            <Switch>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/expertise" component={Expertise}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/projects" component={Project}/>
                <Route exact path="" component={Home}/>
                <Route exact path="*" component={NotFound}/>
            </Switch>
        </Container>
    )
}