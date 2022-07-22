import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import SearchItems from '../../components/searchItem/SearchItems'
import SearchBox from '../../components/SearchBox/SearchBox'


const List = () => {
    const location = useLocation()
    return (
        <>
            <Navbar type={'list'} />
            <Header type={'list'} />
            <ListContainer>
                <div className="list-wrapper">
                    <SearchBox location={location} />
                    <ListResult>
                        <SearchItems />
                        <SearchItems />
                        <SearchItems />
                        <SearchItems />
                        <SearchItems />
                        <SearchItems />
                        <SearchItems />
                        <SearchItems />
                    </ListResult>
                </div>
            </ListContainer>
        </>
    )
}

export default List

export const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .list-wrapper {
        width: 100%;
        max-width: 1024px;
        display: flex;
        gap: 20px;

        .search-map {
            flex: 1;
        }
    }
`

export const ListResult = styled.div`
    flex: 3;
`