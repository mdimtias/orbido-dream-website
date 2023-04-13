import React from 'react';
import Star from "./../../../assets/HandleMoney/star.png";
import Reward from "./../../../assets/HandleMoney/verify.png";
import Transfer from "./../../../assets/HandleMoney/transfer.png";
import "./HandleMoney.css"
const HandleMoney = () => {
    return (
        <section className="bg-primary py-12 md:py-16">
            <div className="container mx-auto px-5">
                <div className="grid gap-10 lg:gap-6 lg:grid-cols-2">
                    <div>
                        <h2 className="font-semibold text-5xl text-white mb-5">You do the business, <br /> we’ll handle the money.</h2>
                        <p className="text-lg text-white font-poppins opacity-70 mb-5">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                        <button className="get-btn-style font-poppins text-lg font-medium text-[#00040E]">Get</button>
                    </div>
                    <div className='handle-money-cards flex flex-col gap-6'>
                        <div className="flex gap-5 items-center pl-5">
                            <div className="icon"><img src={Star} alt="Rewards" /></div>
                            <div className="">
                                <h3 className="text-white font-poppins text-lg font-semibold mb-1">Rewards</h3>
                                <p className="font-poppins text-white opacity-70 font-normal text-base">The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center handle-money-card pl-5">
                            <div className="icon"><img src={Reward} alt="100% Secured" /></div>
                            <div className="">
                                <h3 className="text-white font-poppins text-lg font-semibold mb-1">100% Secured</h3>
                                <p className="font-poppins text-white opacity-70 font-normal text-base">We take proactive steps make sure your information and transactions are secure.</p>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center pl-5">
                            <div className="icon"><img src={Transfer} alt="Rewards" /></div>
                            <div className="">
                                <h3 className="text-white font-poppins text-lg font-semibold mb-1">Balance Transfer</h3>
                                <p className="font-poppins text-white opacity-70 font-normal text-base">A balance transfer credit card can save you a lot of money in interest charges.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HandleMoney;