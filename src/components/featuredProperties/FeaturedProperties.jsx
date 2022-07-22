import React from 'react'
import styled from 'styled-components'

const FeaturedProperties = () => {
    return (
        <Fp>
            <div className="fpItem">
                <img className='fpImg' src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
                <span className='fpName'>Aarthotel Stare Miasto</span>
                <span className='fpCity'>Madrid</span>
                <span className='fpPrice'>Starting from $120</span>
                <FpRating>
                    <button>8.9</button>
                    <span>Exellent</span>
                </FpRating>
            </div>
            <div className="fpItem">
                <img className='fpImg' src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
                <span className='fpName'>Aarthotel Stare Miasto</span>
                <span className='fpCity'>Madrid</span>
                <span className='fpPrice'>Starting from $120</span>
                <FpRating>
                    <button>8.9</button>
                    <span>Exellent</span>
                </FpRating>
            </div>
            <div className="fpItem">
                <img className='fpImg' src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
                <span className='fpName'>Aarthotel Stare Miasto</span>
                <span className='fpCity'>Madrid</span>
                <span className='fpPrice'>Starting from $120</span>
                <FpRating>
                    <button>8.9</button>
                    <span>Exellent</span>
                </FpRating>
            </div>
            <div className="fpItem">
                <img className='fpImg' src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
                <span className='fpName'>Aarthotel Stare Miasto</span>
                <span className='fpCity'>Madrid</span>
                <span className='fpPrice'>Starting from $120</span>
                <FpRating>
                    <button>8.9</button>
                    <span>Exellent</span>
                </FpRating>
            </div>
        </Fp>
    )
}

export default FeaturedProperties

const Fp = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    .fpItem {
        flex: 1;
        gap: 10px;
        display: flex;
        flex-direction: column;
    }

    .fpImg {
        width: 100%;
    }

    .fpName {
        font-weight: bold;
    }

    .fpCity {
        font-weight: 300;
    }

    .fpPrice {
        font-weight: 500;
    }
`
const FpRating = styled.div`


    &>button {
        background-color: #003580;
        border: none;
        padding: 3px;
        margin-right: 10px;
        color: #fff;
        font-weight: 500;
    }

    &>span {
        font-size: 14px;
    }
`
