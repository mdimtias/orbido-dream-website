import React from 'react';
import "./GetStarted.css";

const GetStarted = () => {
    return (
        <section className="bg-primary py-10">
            <div className="container mx-auto px-5">
                <div className="flex flex-wrap justify-between items-center px-5 py-7 get-started">
                <div>
                    <h2 className="text-5xl text-white font-poppins font-semibold mb-3">Let’s try our service now!</h2>
                    <p className="text-white opacity-70 font-normal text-lg">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                    </div>
                    <div>
                        <button className="get-started-btn mt-5 lg:mt-0">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;