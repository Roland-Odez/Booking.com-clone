import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const SelectRoom = ({ setOpenRoom }) => {
    return (
        <SRoom>
            <div className="selectContainer">
                <h2 className="title">Select rooms:</h2>
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="close"
                    onClick={() => setOpenRoom(false)}
                />
                <div className="item">
                    <div className="itemInfo">
                        <div className="roomTitle">Deluxe Room</div>
                        <div className="roomDesc">King Size bed, 1 bathroom, balcony</div>
                        <div className="roomMax">
                            Max people: <b>2</b>
                        </div>
                        <div className="price">$200</div>
                    </div>
                    <div className="selectRooms">
                        <div className="room">
                            <label>101</label>
                            <input type="checkbox" />
                        </div>
                        <div className="room">
                            <label>102</label>
                            <input type="checkbox" />
                        </div>
                        <div className="room">
                            <label>103</label>
                            <input type="checkbox" />
                        </div>
                        <div className="room">
                            <label>104</label>
                            <input type="checkbox" />
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemInfo">
                        <div className="roomTitle">Deluxe Room</div>
                        <div className="roomDesc">King Size bed, 1 bathroom, balcony</div>
                        <div className="roomMax">
                            Max people: <b>2</b>
                        </div>
                        <div className="price">$200</div>
                    </div>
                    <div className="selectRooms">
                        <div className="room">
                            <label>101</label>
                            <input type="checkbox" />
                        </div>
                        <div className="room">
                            <label>102</label>
                            <input type="checkbox" />
                        </div>
                        <div className="room">
                            <label>103</label>
                            <input type="checkbox" />
                        </div>
                        <div className="room">
                            <label>104</label>
                            <input type="checkbox" />
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemInfo">
                        <div className="roomTitle">Deluxe Room</div>
                        <div className="roomDesc">King Size bed, 1 bathroom, balcony</div>
                        <div className="roomMax">
                            Max people: <b>2</b>
                        </div>
                        <div className="price">$200</div>
                    </div>
                    <div className="selectRooms">
                        <div className="room">
                            <label>101</label>
                            <input type="checkbox" />
                        </div>
                        <div className="room">
                            <label>102</label>
                            <input type="checkbox" />
                        </div>
                        <div className="room">
                            <label>103</label>
                            <input type="checkbox" />
                        </div>
                        <div className="room">
                            <label>104</label>
                            <input type="checkbox" />
                        </div>
                    </div>
                </div>
                <button>Reserve Now!</button>
            </div>
        </SRoom>
    )
}

export default SelectRoom

const SRoom = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.418);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 3s all ease-in-out;

        .selectContainer {
        background-color: white;
        padding: 20px;
        position: relative;
        }

        .close {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        padding: 10px;
        font-size: 25px;
        }

        .item {
        display: flex;
        align-items: center;
        gap: 50px;
        padding: 20px;
        }

        .rInfo {
        display: flex;
        flex-direction: column;
        gap: 5px;
        }

        .roomTitle {
        font-weight: 500;
        }

        .roomDesc {
        font-weight: 300;
        }

        .roomMax {
        font-size: 12px;
        }

        .price {
        font-weight: 500;
        }

        .selectRooms{
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        font-size: 8px;
        color: gray;
        }

        .room{
        display: flex;
        flex-direction: column;
        }

        button {
        border: none;
        padding: 10px 20px;
        background-color: #0071c2;
        color: white;
        font-weight: bold;
        cursor: pointer;
        border-radius: 5px;
        width: 100%;
        margin-top: 20px;
        }
`