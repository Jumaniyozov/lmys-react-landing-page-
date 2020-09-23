import React from 'react'
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection'
import Pricing from '../Pricing/Pricing';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjThree}/>
            <HeroSection {...homeObjTwo}/>
            <HeroSection {...homeObjFour}/>
            <Pricing/>
        </>
    )
}

export default Home
