import React from 'react';
import "./Hero.css";
const Hero = () => {
    return (
        <section className='hero-section bg-primary'>
            <div className="container mx-auto px-5 sm:px-0">
                <div className="heading-text flex justify-center items-center py-20 md:py-28 lg:px-16">
                    <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl heading-style text font-poppins text-center uppercase">make your dream <br />website Stand out <br /> in a crowd</h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;