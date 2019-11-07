import React from "react"
import styled from "styled-components"

const Missing = styled.div`
    padding: 0px 15px;
    // padding-top: 30vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;

    h1{
        margin-bottom: 0;
        color: #D8A31A;
    }
`

const NotFound: React.FC = ()=>{
    return <Missing>
        <h1>404!</h1>
        <h2>Sorry, page your looking for does not exist...</h2>
    </Missing>
}

export default NotFound