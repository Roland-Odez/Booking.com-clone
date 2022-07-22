import React from 'react'
import styled from 'styled-components'

const Featured = () => {
    return (
        <Feature>
            <div className="featuredItem">
                <img src="http://www.whatsoninthessaloniki.com/wp-content/uploads/2017/05/properties3.jpg" alt="bed room" className='featuredImg' />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="http://www.whatsoninthessaloniki.com/wp-content/uploads/2017/05/properties2.jpg" alt="bed room" className='featuredImg' />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://media.inmobalia.com/imgV1/B8vEv5Xh_VThvnEqMx4G0YtA8lAADdw1sBC5uN5pSX6~ImMWYgK8f72a6_2V5Fsi3Ei28Kvmds~cBwEukMeKfUqYSWBBx9dABGpiKVqX3duVN6IEC7a3fmxGRw~3MMdiVJOZoa86PHvBMYNH3bHS0p1EIGUFSgtF2S4QuKsQiwxb_NhWCJ4oxuQcj4b7gELl0yx~1KBc0r0PHRvqDOVsM2WYSOVVBGkke8UaP0logn9wiWe44ULuy4rGQSpzLltY2Bs5QUuJnEjc48QoaLB2DoXY1lbuX7v8Z8f2Kt9EA2Mk2iFEDD_cNOzR3E1b7nctMQAdqLrvnnAXaut_A2pXPCAyZbccx3DFag--.jpg" alt="bed room" className='featuredImg' />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://media.inmobalia.com/imgV1/B8vEv5Xh_VThvnEqMx4G0ZxU~~H0Ar_8Bn_AfAx~4dnt796zQ9QIPwzdr9PkzIdRpbOaIUG6rQkTUfRM4VBt~CJs4XmwvxWZkyUVQnrmN3tyy8uBgCh_tM5IM~2IK6mgwRDsyD~SJZjzM67qhs5S~6d8tJScYgATnET2uYtZ5alIQADv2HaOnMkH7n~Jmlu~3o76MMDZIxYcFp9pgoABl~syLArVGlGOhQwVAnow9uCofJLoPmE3S7TKIY6aUCRKju64I5V0nNfESixZB3xaNsDxJJcv8q1HSkfrpXcfm~XGX7S8mkDR9LHrpbMOl4sVHcbV7abAPUry.jpg" alt="bed room" className='featuredImg' />
                <div className="featuredTitles">
                    <h1>California</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
        </Feature>
    )
}

export default Featured

const Feature = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    align-items: center;
    jusify-content: space-between;
    gap: 30px;

    .featuredItem {
        position: relative;
        color: #fff;
        border-radius: 10px;
        overflow: hidden;
        height: 250px;
        flex: 1;
    }

    .featuredImg {
        width: 100%;
        object-fit: cover;
        height: 100%;
    }

    .featuredTitles {
        position: absolute;
        bottom: 20px;
        z-index: 1; 
    }
`