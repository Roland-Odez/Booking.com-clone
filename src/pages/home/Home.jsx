import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import styled from 'styled-components'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'


const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <HomeContainer>
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Home guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </HomeContainer>
        </div>
    )
}

export default Home

const HomeContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    .homeTitle {
        width: 1024px;
        font-size: 24px;
    }
`