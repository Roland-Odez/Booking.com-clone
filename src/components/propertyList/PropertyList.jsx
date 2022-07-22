import React from 'react'
import styled from 'styled-components'

const PropertyList = () => {
    return (
        <Plist>
            <div className="pItem">
                <img src="https://www.dmproperties.com/cms/wp-content/uploads/2016/03/Marbella-offers-value-in-luxury-homes-market-1-818x545.jpg" alt="properties" className='pImg' />
                <div className="pTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="pItem">
                <img src="https://www.jamesedition.com/stories/wp-content/uploads/2019/04/20-950x628.jpeg" alt="properties" className='pImg' />
                <div className="pTitles">
                    <h1>Austin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="pItem">
                <img src="https://www.mpdunne.com/cms/wp-content/uploads/2021/08/la-zagaleta-luxury-villa-740x416.jpg" alt="bed room" className='pImg' />
                <div className="pTitles">
                    <h1>Reno</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="pItem">
                <img src="https://www.jamesedition.com/stories/wp-content/uploads/2019/02/brand-new-villa-710x470.jpg" alt="bed room" className='pImg' />
                <div className="pTitles">
                    <h1>California</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="pItem">
                <img src="https://www.jamesedition.com/stories/wp-content/uploads/2019/02/Gm-paniramic1-710x470.jpg" alt="bed room" className='pImg' />
                <div className="pTitles">
                    <h1>Marbella</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
        </Plist>
    )
}

export default PropertyList

const Plist = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    z-index: 2px;

    .pItem {
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        
        flex: 1;
    }

    .pImg {
        Width: 100%;
        object-fit: cover;
    }

    .pTitles > h1 {
        font-size: 18px
    }

    .pTitles > h2 {
        font-size: 14px;  
        font-weight: 300;
    }
`