import { useMemo } from 'react';
import styled from 'styled-components'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';



const apiKey = "AIzaSyBO0vBkA6Oow-Y69YeWmHWKx-jfMq8V0Uo"

const Map = ({ zoom, center }) => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey, googleMapsClientId: '41ce75251ecf85cd' })
    const newCenter = useMemo(() => (center), [])
    return (
        <HotelMap>
            {isLoaded && <GoogleMap zoom={zoom} center={newCenter} mapContainerStyle={{ width: '100%', height: '100%' }}>
                <Marker position={newCenter} />
            </GoogleMap>}
        </HotelMap>
    )
}

export default Map

const HotelMap = styled.div`
    width: 100%;
    height: 150px;
    margin: 10px auto;

`