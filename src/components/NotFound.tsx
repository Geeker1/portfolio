import React from "react"
import styled from "styled-components"

const Missing = styled.div`
    height: 100vh;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;

    h1{
        margin-bottom: 0;
    }
`

const NotFound: React.FC = ()=>{
    return <Missing>
        <h1>404</h1>
        <h2>Sorry, page your looking for does not exist...</h2>
    </Missing>
}

export default NotFound