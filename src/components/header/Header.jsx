import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const Header = ({ type }) => {
    const navigate = useNavigate()
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState(
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    )
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleSearch = () => {
        navigate('hotels', { state: { destination, date, options } })
    }
    return (
        <Headers type={type}>
            <HeaderContainer type={type} className={type === "list" ? "listMode" : ""}>
                <HeaderList type={type}>
                    <HeaderListItem className='active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </HeaderListItem>
                    <HeaderListItem>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </HeaderListItem>
                    <HeaderListItem>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </HeaderListItem>
                    <HeaderListItem>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </HeaderListItem>
                    <HeaderListItem>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airpot Taxis</span>
                    </HeaderListItem>
                </HeaderList>

                {type !== 'list' && (
                    <>
                        <HeaderTitle>
                            A life time of discounts? that's awesome
                        </HeaderTitle>
                        <HeaderDesc>
                            Get rewarded for your travels and unlock instant savings of 0% or more with a free Ro-booking account
                        </HeaderDesc>
                        <HeaderSearch>
                            <div className="header_searchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input type="text" placeholder="where are you going?" className='header_SearchInput' onChange={(e) => setDestination(e.target.value)} value={destination} />
                            </div>
                            <div className="header_searchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />

                                <span onClick={() => setOpenDate(!openDate)} className="header_searchText">{`${format(date.startDate, 'MM/dd/yy')} to ${format(date.endDate, 'MM/dd/yy')}`}</span>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate(item.selection)}
                                        moveRangeOnFirstSelection={true}
                                        ranges={[date]}
                                        className='date'
                                    />)
                                }
                            </div>
                            <div className="header_searchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={() => setOpenOptions(!openOptions)} className="header_searchText">{`${options.adult} adult . ${options.children} . children ${options.room} . room`}</span>
                                {openOptions && (
                                    <Option>
                                        <div className="optionItem">
                                            <span className="optionText">Adult</span>
                                            <div className="optionCounter">
                                                <button className="optionCounterButton" onClick={(e) => options.adult > 0 ? setOptions({ adult: options.adult--, ...options }) : ''}>-</button>
                                                <span className="optionCounterNumber">{options.adult}</span>
                                                <button className="optionCounterButton" onClick={(e) => setOptions({ adult: options.adult++, ...options })}>+</button>
                                            </div>
                                        </div>

                                        <div className="optionItem">
                                            <span className="optionText">Children</span>
                                            <div className="optionCounter">
                                                <button className="optionCounterButton" onClick={(e) => options.children > 0 ? setOptions({ children: options.children--, ...options }) : ''}>-</button>
                                                <span className="optionCounterNumber">{options.children}</span>
                                                <button className="optionCounterButton" onClick={(e) => setOptions({ children: options.children++, ...options })}>+</button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">Room</span>
                                            <div className="optionCounter">
                                                <button className="optionCounterButton" onClick={(e) => options.room > 0 ? setOptions({ room: options.room--, ...options }) : ''}>-</button>
                                                <span className="optionCounterNumber">{options.room}</span>
                                                <button className="optionCounterButton" onClick={(e) => setOptions({ room: options.room++, ...options })}>+</button>
                                            </div>
                                        </div>
                                    </Option>)
                                }
                            </div>
                            <HeaderBtn style={{ borderRadius: '0px', padding: '17 px' }} onClick={handleSearch}>Search</HeaderBtn>
                        </HeaderSearch>
                    </>
                )}

            </HeaderContainer>
        </Headers>
    )
}

export default Header

const Headers = styled.div`
    background-color: #242F9B;
    color: #fff;
    display: flex;
    justify-content: center;
    position: sticky;
    top: -250px;
    z-index: 3;
    padding-top: ${(props) => props.type === 'list' ? '0px' : '100px'};
`
const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 20px 0px ${(props) => props.type === 'list' ? '10px' : '50px'} 0px;
    justify-content: center;

    &.listMode {
        margin-bottom: 0px;
    }
`

const HeaderList = styled.div`
    display: flex;
    gap: 40px;
    margin-bottom: ${(props) => props.type === 'list' ? '20px' : '50px'};
`
const HeaderListItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    &.active {
        border: 1px solid #fff;
        padding: 10px;
        border-radius: 20px;
    }
`

const HeaderTitle = styled.h1`

`
const HeaderDesc = styled.p`
    margin: 20px 0px 30px 0px;
`

const HeaderBtn = styled.button`
    background-color: #764AF1;
    color: #fff;
    font-weight: 500;
    font-size: .9rem;
    border: none;
    padding: 20px 15px;
    border-radius: 7px;
    cursor: pointer;
`

const HeaderSearch = styled.div`
    background-color: #fff;
    border: 4px solid #FFD24C;
    display: flex;
    align-items: center;
    justify-content: space-between;  
    border-radius: 5px;
    bottom: -25px;
    width: 100%;
    position: absolute;
    max-width: 1000px;

    .header_searchItem {
        cursor: pointer;
        position: relative;
        border-right: 4px solid #FFD24C;
        flex: 1;
        padding: 18px 0px;
        height: 100%;
        display: flex;
        align-items: baseline;
    }

    .headerIcon {
        color: lightgrey;
        margin-right: 10px;
        margin-left: 20px;
    }

    .header_searchText {
        color: lightgrey;

    }

    .header_SearchInput {
        border: none;
        outline: none;
        color: #555;
    }

    .header_SearchInput::placeholder {
        color: grey;
    }

    .date {
        position: absolute;
        top: 50px;
        left: 0;
        z-index: 2;
    }
`

const Option = styled.div`
    position: absolute;
    top: 50px;
    background-color: #fff;
    color: grey;
    border-radius: 5px;
    box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4); 
    z-index: 2;
    
    .optionItem {
        width: 200px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }

    .optionCounter {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 13px;
        color: #000;

    }

    .optionCounterButton {
        width: 30px;
        height: 30px;
        border: 1px solid #0071c2;
        color: #0071c2;
        cursor: pointer;
        background-color: #fff;
    }
`