import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem">Countries</li>
                    <li className="fListItem">Regions</li>
                    <li className="fListItem">Cities</li>
                    <li className="fListItem">Districs</li>
                    <li className="fListItem">Airports</li>
                    <li className="fListItem">Hotels</li>
                    <li className="fListItem">Place of Interest</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Homes</li>
                    <li className="fListItem">Apartments</li>
                    <li className="fListItem">Reports</li>
                    <li className="fListItem">Villas</li>
                    <li className="fListItem">Hotels</li>
                    <li className="fListItem">B&Bs</li>
                    <li className="fListItem">Guests Houses</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Unique places to stay</li>
                    <li className="fListItem">All destinations</li>
                    <li className="fListItem">Discover</li>
                    <li className="fListItem">Reviews</li>
                    <li className="fListItem">Unpacked: Travel articles</li>
                    <li className="fListItem">Travel communities</li>
                    <li className="fListItem">Seasonal and holiday deals</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Car rental</li>
                    <li className="fListItem">Flight finder</li>
                    <li className="fListItem">Restaurant reservations</li>
                    <li className="fListItem">Booking.com for Travel Agents</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Coronavirus (COVID-19) FAQs</li>
                    <li className="fListItem">About Booking.com</li>
                    <li className="fListItem">Customer Service Help</li>
                    <li className="fListItem">Partner help</li>
                    <li className="fListItem">Careers</li>
                    <li className="fListItem">Sustainability</li>
                    <li className="fListItem">Press center</li>
                    <li className="fListItem">Safety Resource Center</li>
                    <li className="fListItem">Investor relations</li>
                    <li className="fListItem">Terms & conditions</li>
                    <li className="fListItem">Partner dispute</li>
                    <li className="fListItem">How We Work</li>
                    <li className="fListItem">Privacy & cookie statement</li>
                    <li className="fListItem">Corporate contact</li>
                </ul>
            </div>
            <div className="fText">Copyright © 1996–{new Date().getFullYear()} Ro-booking™. All rights reserved.</div>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 0px 50px 0px;

    .fLists {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        max-width: 1100px;

        .fList {
            list-style-type: none;
            color: #0071c2;
            font-size: 13px;
            padding: 0;
        
            .fListItem {
                margin: 6px 0px;
            }
        }
    }

    .fText {
        width: 100%;
        text-align: start;
        padding-left: 50px;
    }
`