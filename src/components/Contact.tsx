import React from "react"
import styled from "styled-components"
import email from "../styles/mail.svg"
import phone from "../styles/call.svg"
import facebook from "../styles/facebook.svg"
import twitter from "../styles/twitter.svg"
import insta from "../styles/insta.svg"

const ContactWrapper = styled.div`
    padding: 0px 15px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    .media{
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
        & > img{
            margin: 0 5px;
            width: 30px;
            height: 30px;
        }
    }

    .persua, .contact{
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .persua h1{
        color: #D8A31A;
        margin: 10px auto;
    }

    .social > div{
        display: flex;
        span,img{padding:0px 7px;}
        margin: 15px auto;
    }

    .social img{
        width: 30px;
        height: 30px;
    }

    > *{width: 500px;max-width: 100%;}
    form{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        input, textarea{
            width: 100%;
            padding: 10px 5px;
            background-color:transparent;
            border-color: #D8A31A;
            border-style: dashed;
            border-width: 1px;
            color: #fff;
            margin-top:10px;
            -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
            -moz-box-sizing: border-box;    /* Firefox, other Gecko */
            box-sizing: border-box;         /* Opera/IE 8+ */
        }

        .submit{
            width:100%;
            padding: 5px 10px;
        }

        .submit button{
            width: 200px;
            max-width: 100%;
            margin: 15px auto;
        }
        .btn{
            padding: 10px;
            background-color: rgba(0,72,99,1);
            font-size: 20px;
        }
        .btn:hover{
            background-color: rgba(0,72,99,0.6);
            cursor: pointer;
        }

        input:focus, textarea:focus,input:active, textarea:active{
            
            border-color: #D8A31A;
            outline-color: #D8A31A;
            box-shadow: none;
            outline-style: dashed;
        }

        .input-wrapper{
            padding: 5px 10px;
        }
        label{font-size: 17px;}

        .name, .email{flex-grow:1;}

        .message{
            flex-grow: 2;
        }

        
    }
`

const Contact : React.FC = ()=>{
    window.scrollTo(0,0);
    return(
        <ContactWrapper>
            <div className="persua">
                <h1>Let's Talk</h1>
                <p>Your Ideas are important, don't hold back ! <br/> 
                Ask us anything, no matter how small ....</p>
                <div className="social">
                    <div className="phone">
                        <img alt="Email" src={email}/>
                        <span>+(234) 902 9632 002</span>
                    </div>
                    <div className="email">
                        <img alt="Phone" src={phone}/>
                        <span>ledumibaakee@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="contact">
                <form>
                    <div className="input-wrapper name">
                        <label>
                            Name
                        </label>
                        <input placeholder="    Dominic Baker" type="text"/>
                    </div>
                    <div className="input-wrapper email">
                    <label>
                            Email
                        </label>
                        <input placeholder="   kovan908@gmail.com" type="text"/>
                    </div>
                    <div className="input-wrapper message">
                    <label>
                            Message
                        </label>
                        <textarea placeholder="   Your ideas are important" rows={8}></textarea>
                    </div>
                    <div className="submit">
                        <button className="btn">
                            Send
                        </button>
                    </div>
                </form>
            </div>
            <div className="media">
                <img alt="Email" src={facebook}/>
                <img alt="Email" src={twitter}/>
                <img alt="Email" src={insta}/>
            </div>
        </ContactWrapper>
    )
}

export default Contact