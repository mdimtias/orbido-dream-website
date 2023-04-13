import React from 'react';
import Airbnb from "./../../../assets/Brand/airbnb.png"
import Binance from "./../../../assets/Brand/binance.png"
import Coinbase from "./../../../assets/Brand/coinbase.png"
import Dropbox from "./../../../assets/Brand/dropbox.png"
const Brand = () => {
    return (
       <section className="bg-primary py-10">
        <div className="container mx-auto px-5">
            <div className="flex flex-wrap gap-10 items-center justify-center">
                <img src={Airbnb} alt="Airbnb" />
                <img src={Binance} alt="Binance" />
                <img src={Coinbase} alt="Coinbase" />
                <img src={Dropbox} alt="Dropbox" />
            </div>
        </div>
       </section>
    );
};

export default Brand;