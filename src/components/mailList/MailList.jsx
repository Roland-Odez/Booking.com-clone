import React from 'react'
import styled from 'styled-components'
const MailList = () => {
    return (
        <Mail>
            <h2>save time, save money!</h2>
            <div className="mailDesc">Sign up and we'll send the best deals to you</div>
            <div className="mailInputContainer">
                <input type="text" name="email" placeholder='Your Email' />
                <button type="submit">Subscribe</button>
            </div>
        </Mail>
    )
}

export default MailList

const Mail = styled.div`
    width: 100%;
    margin-top: 50px;
    background-color: #003580;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap: 5px;
    padding: 50px;

    h2 {
        margin: 0px;
    }

    .mailDesc {
        font-size: 20px;
    }

    .mailInputContainer > input {
        width: 350px;
        height: 30px;
        padding: 10px;
        margin-top: 5px;
        border-radius: 4px;
        border: 1px solid #fff;

        &::placeholder {
            font-size: 19px;
        }
    }

    .mailInputContainer > button {
        background-color: #0071c2;
        padding: 15px 30px;
        font-size: 19px;
        border: none;
        color: #fff;
        margin-left: 4px;
        border-radius: 4px;
        cursor: pointer;
    }
`