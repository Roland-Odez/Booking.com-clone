import React from 'react'
import styled from 'styled-components'
const SearchItems = () => {
    return (
        <SearchItem>
            <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="siImg" />
            <SearchDesc>
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">free airpot taxi</span>
                <span className="siSubtitle">Studio Apartment with air conditioning</span>
                <span className="siFeatures">Entire studio . 1 bathroom . 21m2 1 full bed</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="sicancelOpSubtitle">you can close later, so luck in this great price today!</span>
            </SearchDesc>
            <SearchDetails>
                <div className="siRating">
                    <span>excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes Taxes and fees</span>
                    <span className="siCheckButton">See availability</span>
                </div>
            </SearchDetails>
        </SearchItem>
    )
}

export default SearchItems

const SearchItem = styled.div`
    border: 1px solid lightgrey;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;

    .siImg {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
`
const SearchDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 2;

    .siTitle {
        font-size: 20px;
        color: #0071c2;
        margin: 0px;
    }

    .siDistance {
        font-size: 12px;
    }

    .siTaxiOp {
        font-size: 12px;
        background-color: #008009;
        color: #fff;
        width: fit-content;
        padding: 3px;
        border-radius: 5px;
    }

    .siSubtitle {
        font-size: 12px;
        font-weight: bold;
    }

    .siFeatures {
        font-size: 12px;
    }

    .siCancelOp {
        font-size: 12px;
        color: #008009;
        font-weight: bold;
    }

    .sicancelOpSubtitle {
        font-size: 12px;
        color: #008009;
    }
`
const SearchDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .siRating {
        display: flex;
        justify-content: space-between;

        span {
            font-weight: 500;
        }

        button {
            background-color: #008009;
            color: #fff;
            padding: 5px;
            font-weight: bold;
            border: none;
        }
    }

    .siDetailTexts {
        display: flex;
        text-align: right;
        flex-direction: column;
        gap: 5px;

        .siCheckButton {
            background-color: #0071c2;
            color: #fff;
            font-weight: bold;
            padding: 8px 5px;
            border: none;
            text-align: center;
            cursor: pointer;
            border-radius: 5px;
        }
    }
`