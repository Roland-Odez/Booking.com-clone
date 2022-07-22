import React, { useState } from 'react'
import { faHeartbeat, faHome, faKitchenSet, faLocationDot, faP, faShareAlt, faSwimmer, faWifi3 } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faFontAwesomeFlag } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchBox from '../../components/SearchBox/SearchBox'
import { ListContainer, ListResult } from '../list/List'
import Map from '../../components/map/Map'
import Footer from '../../components/footer/Footer'
import SelectRoom from '../../components/modal/SelectRoom'



const photos = [
    {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/337548352.jpg?k=9c55147eaac0b37a48ee3370d8d73b37f3d78f94c1e41e995034f8226a29b337&o=&hp=1"
    },
    {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/337548359.jpg?k=3e9052ad3a094cbd3a6e0c614a5073bab43280087a6fadb6e8e34936887c3b04&o=&hp=1"
    },
    {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/337548363.jpg?k=721f09915756c6203e7de677a3401cac9d271d20ab6e82d3d6f6685e22c651ee&o=&hp=1"
    },
    {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/337548363.jpg?k=721f09915756c6203e7de677a3401cac9d271d20ab6e82d3d6f6685e22c651ee&o=&hp=1https://cf.bstatic.com/xdata/images/hotel/max1024x768/337548363.jpg?k=721f09915756c6203e7de677a3401cac9d271d20ab6e82d3d6f6685e22c651ee&o=&hp=1"
    },
    {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/337548380.jpg?k=b8465f9565c7bee257f3fbeaf83a21db82e47259ab3b75bf0961ed78ce5da8b5&o=&hp=1"
    },
    {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/337548378.jpg?k=d28c6d195e8dd054e9067bb13b75cc526ff8c37d5e77167853ad059f3acb2ea0&o=&hp=1"
    },
    {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/337548382.jpg?k=879e78bcf37b509ae296851d67b8ad82e74224078f57a278827e3cf2e8756300&o=&hp=1"
    },
    {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/337548383.jpg?k=37a45490fca22f709188cd6b00f58490f71f34ffd9720b03043558487c087776&o=&hp=1"
    },
    {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/337548376.jpg?k=27eb3d46dc8a35fe2718745df014fa301f3a64088920851de64bb31ab046bd2a&o=&hp=1"
    },
    {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/337548373.jpg?k=ba039542fea0bd2fd333814b0c113f99900ff6d93edf4cb8fa8416c49ab44a07&o=&hp=1"
    }

]
const Hotels = () => {
    const [zoom, setZoom] = useState(10)
    const [openRoom, setOpenRoom] = useState(false)
    const [center, setCenter] = useState({ lat: 40, lng: -80 })

    return (
        <>
            <Navbar type={'list'} />
            <Header type={'list'} />
            <ListContainer>
                <div className="list-wrapper">
                    <div className="search-map">
                        <SearchBox />
                        <Map zoom={zoom} center={center} />
                    </div>
                    <ListResult>
                        <HotelContainer>
                            <div className="hotelHead">
                                <div className="col-1 col">
                                    <h1 className="hotelTitle"><small className="vacation">Vacation Home</small> Wave and Sea Sun Destin Hot Tub  </h1>
                                    <div className="hotelAddress">
                                        <FontAwesomeIcon className='icon' icon={faLocationDot} />
                                        <span>Elton St 125 New York</span>
                                    </div>
                                    <span className="hotelDistance">Excellent location - 500m from center</span>
                                    <span className="hotelPriceHighlight">Book a stay over $114 at this property and get a free airport taxi</span>
                                </div>
                                <div className="col-2 col">
                                    <div className="row"><FontAwesomeIcon icon={faHeart} className='icon icon-right' /><FontAwesomeIcon icon={faShareAlt} className="icon icon-right" /><span className='booking'>Book your vacation home stay</span></div>
                                    <div className="row"><FontAwesomeIcon icon={faFontAwesomeFlag} className='icon' /><span style={{ fontWeight: '700', fontSize: '11px' }}>we price tag</span></div>
                                </div>
                            </div>
                            <HotelImages>
                                {photos.map((photo, idx) => (
                                    <div className={`hotelImgWrapper img${idx}`} key={idx} style={{ display: idx > 7 ? 'none' : 'block' }}>
                                        <img src={photo.src} alt="hotel img" width="100%" className="hotelImg" />
                                    </div>
                                ))}
                            </HotelImages>
                        </HotelContainer>
                    </ListResult>
                </div>
            </ListContainer>
            <Details>
                <div className="top-details">
                    <div className="items">
                        <FontAwesomeIcon icon={faHome} className='top-detail-icon' />
                        <p>Whole</p>
                    </div>
                    <div className="items">
                        <p style={{ fontSize: '20px', marginBottom: '0' }}>71 m²</p>
                        <p>Size</p>
                    </div>
                    <div className="items">
                        <FontAwesomeIcon icon={faKitchenSet} className='top-detail-icon' />
                        <p>Kitchen</p>
                    </div>
                    <div className="items">
                        <FontAwesomeIcon icon={faSwimmer} className='top-detail-icon' />
                        <p>Outdoor pool</p>
                    </div>
                    <div className="items">
                        <FontAwesomeIcon icon={faWifi3} className='top-detail-icon' />
                        <p>Free Wifi</p>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="cols">
                        <p>This property is 2 minutes walk from the beach. Wave and Sea Sun Destin Hot Tub Pools Beach, a property with a fitness center, is located in Destin, a few steps from Destin Beach, a 17-minute walk from Henderson Beach, as well as 549 m from Big Kahuna's Water Park. This beachfront property has a balcony, free private parking and free WiFi. <br />

                            The air-conditioned vacation home is composed of 1 separate bedroom, a living room, a fully equipped kitchen with a dishwasher and microwave, and 1 bathroom. A flat-screen TV is provided. <br />

                            The vacation home offers a hot tub. Wave and Sea Sun Destin Hot Tub Pools Beach provides an outdoor swimming pool and a playground. <br />

                            Emerald Coast Centre is 3.4 km from the accommodation, while Destin History and Fishing Museum is 4 km away. The nearest airport is Destin Executive Airport, 1 km from Wave and Sea Sun Destin Hot Tub Pools Beach. <br />

                            This is our guests' favorite part of Destin, according to independent reviews. <br />

                            <b> Wave and Sea Sun Destin Hot Tub Pools Beach has been welcoming Booking.com guests since Feb 9, 2022 </b><br />

                            Distance in property description is calculated using © OpenStreetMap</p>
                    </div>
                    <div className="cols">
                        <div>
                            <b>Property Highlights</b>
                            <p className='btm-p'><FontAwesomeIcon icon={faHeartbeat} style={{ fontSize: '17px', marginRight: '10px' }} /> Located in the top-rated area in Destin, this property has an excellent location score of 10.0!</p>
                            <p className='btm-p'><FontAwesomeIcon icon={faP} style={{ fontSize: '17px', marginRight: '10px' }} /> Free Private Parking Available On Site</p>
                            <button onClick={() => setOpenRoom(true)}>Reserve Booking</button>
                        </div>
                    </div>
                </div>
                {openRoom && <SelectRoom setOpenRoom={setOpenRoom} />}
            </Details>
            <Footer />
        </>
    )
}

export default Hotels

const HotelContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .hotelHead {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        
        span {
            font-size: .8rem;
        }
        .icon {
            color: #0071c2;
            font-weight: 100;
            margin-right: 5px;
            
        }
        .col {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            margin: 0px 2px;
        }

        .col-1 {
            gap: 3px;

            h1 {
                margin: 0;
                font-size: 1.2rem;
                display: flex;
                align-items: flex-start;
                line-height: 12px;
                gap: 5px;
            }

            .vacation {
                font-size: 11px;
                background-color: #006607;
                color: #fff;
                width: fit-content;
                padding: 3px 5px;
                
                
            }
        }

        .col-2 {
            align-items: flex-end;
            justify-content: flex-start;
            
            div {
                margin-bottom: 15px;
                display: flex;
            }

            .icon.icon-right{
                margin-right: 20px;
                font-size: 1.3rem;
            }

            span.booking {
                background-color: #0071C2;
                color: #fff;
                padding: 5px 10px;

            }
        }

    }

`

const HotelImages = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
    grid-auto-flow: dense;
    width: 100%;
    height: 100%;

    .hotelImgWrapper img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: fill;
        box-shadow: 0px 0px 3px 2px #0001;
    }

    .hotelImgWrapper.img0 ,
    .hotelImgWrapper.img1 {
        grid-column-end: span 2;
        grid-row-end: span 2;
    }
    .hotelImgWrapper.img0 {
        grid-row: 1 / 2;
    }
    .hotelImgWrapper.img1 {
        grid-row: 2 /3;
    }
    .hotelImgWrapper.img2 {
        grid-column-end: span 3;
        grid-row: 1 / 3;
    }
    
    
`

const Details = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 10px auto;
    

    .top-details {
        display: flex;
        width: 70%;
        margin-left: auto;

        .items {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 10px;

            .top-detail-icon {
                font-size: 30px;
                color: #0071c2;
            }

            p {
                text-align: center;
                margin-top: 10px;
                color: #0071c2;
            }
        }
    }

    .bottom-details {
        display: flex;

        .cols:first-of-type {
            flex: 2 ;
        }

        .cols {
            flex: 1;
            margin: 10px;

            div {
                background-color: #ebf3ff;
                padding: 15px 20px;
                margin-top: 15px ;
                border-radius: 4px;
            }

            .btm-p {
                display: flex;
                font-size: 12px;
                align-items: center;
                margin: 25px auto;
            }

            p {
                font-size: 14px;

                br {
                    display: block;
                    margin-top: 10px;
                    content: '';
                    line-height: 22px;
                }
            }

            button {
                border: none;
                background-color: #0071c2;
                color: #fff;
                text-align:center;
                width: 100%;
                padding: 10px;
                font-size: 16px;
            }
        }
    }
`
