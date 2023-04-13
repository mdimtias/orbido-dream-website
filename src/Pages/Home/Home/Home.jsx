import React from 'react';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar';
import HandleMoney from '../HandleMoney/HandleMoney';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <HandleMoney></HandleMoney>
        </>
    );
};

export default Home;