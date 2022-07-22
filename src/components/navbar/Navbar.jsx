import React from 'react'
import styled from 'styled-components'

const Navbar = ({ type }) => {

    return (
        <Nav type={type}>
            <NavContainer type={type}>
                <span>RO-booking</span>
                <NavItems>
                    <button>Register</button>
                    <button>Sign in</button>
                </NavItems>
            </NavContainer>
        </Nav>
    )
}

export default Navbar

const Nav = styled.div`
    height: 50px;
    background-color: #242F9B;
    display: flex;
    justify-content: center;
    padding: 0px 20px;
    position: ${(props) => props.type === "list" ? 'relative' : 'fixed'};
    top: 0px;
    z-index: 4; 
    width: 100%;

`;

const NavContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto 0px;
    margin-right: 50px;
    padding-top: ${(props) => props.type === 'list' ? '0px' : '43px'};

    span {
        font-weight: 500;
    }
`;

const NavItems = styled.div`

    button {
        margin-left: 5px;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        color: #0071c2;
        border: #9BA3EB solid 1px;
        font-size: 11px;
        background-color: #fff;
        outlined: none;
    }
`;