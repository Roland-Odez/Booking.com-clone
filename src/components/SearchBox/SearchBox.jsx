import React, { useState } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const SearchBox = ({ location }) => {
    const [openDate, setOpenDate] = useState(false)
    const [destination, setDestination] = useState(location?.state?.destination || "")
    const [date, setDate] = useState(location?.state?.date || {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    const [option, setoption] = useState(location?.state?.options || {
        adult: 1,
        children: 0,
        room: 1
    })

    return (
        <ListSearch>
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
                <label htmlFor="destination">Destination/property</label>
                <input type="text" placeholder={destination} name="destination" onChange={(e) => setDestination(e.target.value)} id="" />
            </div>
            <div className="lsItem">
                <label htmlFor="date">Check-in-date</label>
                <span className='date' onClick={() => setOpenDate(!openDate)}><FontAwesomeIcon icon={faCalendarDays} className="icon" /> {`${format(date.startDate, "MM/dd/yy")} to ${format(date.endDate, "MM/dd/yy")}`}</span>
                {openDate && (
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate(item.selection)}
                        moveRangeOnFirstSelection={true}
                        minDate={new Date()}
                        ranges={[date]}

                    />)
                }
            </div>
            <div className="lsItem">
                <label htmlFor="option">Options</label>
                <div className="lsOptions">

                    <div className="lsOptionItem">
                        <span className="lsOptionText">Min price <small>per night</small></span>
                        <input type="number" min={0} className="lsInputOption" />
                    </div>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">Max price <small>per night</small></span>
                        <input type="number" min={0} className="lsInputOption" />
                    </div>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">Adult</span>
                        <input type="number" min={0} className="lsInputOption" placeholder={option.adult} name="adult" onChange={(e) => setoption({ [e.target.name]: e.target.value, ...option })} />
                    </div>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">children</span>
                        <input type="number" min={0} className="lsInputOption" placeholder={option.children} name="children" onChange={(e) => setoption({ [e.target.name]: e.target.value, ...option })} />
                    </div>
                    <div className="lsOptionItem">
                        <span className="lsOptionText">Room</span>
                        <input type="number" min={0} className="lsInputOption" placeholder={option.room} name="room" onChange={(e) => setoption({ [e.target.name]: e.target.value, ...option })} />
                    </div>
                </div>
            </div>
            <button className='search-btn'>seacrh</button>
        </ListSearch>
    )
}

export default SearchBox

export const ListSearch = styled.div`
    flex: 1;
    background-color: #febb02;
    padding: 10px;
    border-radius: 3px;
    top: 10px;
    height: max-content;

    .lsTitle {
        color: #555;
        font-size: 20px;
        margin-botom: 20px;
    }

    .lsOptions {
        padding: 10px;
        

        .lsOptionItem {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            color: #555;
            font-size: 12px;

            .lsInputOption {
                width: 50px;
            }
        }
    }

    .lsItem {
        display: flex;
        flex-direction:column;
        gap: 5px;
        margin-bottom: 10px;

        label {
            font-size: 12px;
        }

        input {
            border: none;
            padding: 7px;
        }

        span.date {
            padding: 7px;
            cursor: pointer;
            background-color: #fff;

            .icon {
                margin: 0px 5px;
                color: #888;
            }
        }
    }

    button.search-btn {
        padding: 10px;
        background-color: #0071c2;
        color: #fff;
        border: none;
        width: 100%;
        font-weight: 500;
        cursor: pointer;

    }
`