import React from 'react';
import Dribble from "./../../../assets/Transaction/dribble.png";
import Netflix from "./../../../assets/Transaction/netflix.png";
import Manulife from "./../../../assets/Transaction/manulife.png";
import Paypal from "./../../../assets/Transaction/paypal.png";
import PolygonOne from "./../../../assets/Transaction/Polygon-one.png";
import PolygonTwo from "./../../../assets/Transaction/Polygon-two.png";
import AppStore from "./../../../assets/Store/app-store.png";
import PlayStore from "./../../../assets/Store/play-store.png";
import "./LatestTransactions.css";
import { toast } from 'react-hot-toast';
const LatestTransactions = () => {
    const handlePayment = ()=>{
        toast.success('Great! Your Payment is successfully complete.')
    }
    return (
        <section className="bg-primary py-16 lg:pb-20 lg:pt-44">
            <div className="container mx-auto px-5">
                <div className="grid lg:grid-cols-2 gap-5">
                    <div className='md:relative sm:block flex flex-col justify-center items-center'>
                    <div className="last-transactions">
                        <h2 className="text-white font-poppins font-semibold text-2xl mb-5">Last Transaction</h2>
                        <div className="flex justify-between mb-5">
                            <div className="flex gap-2">
                                <div className="">
                                    <img src={Dribble} alt="" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-base text-white">Dribble</h3>
                                    <p className="text-xs font-poppins text-white opacity-70">15 Days ago</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <img className="w-4 h-3" src={PolygonTwo} alt="" />
                                <p className='text-sm font-normal text-white'>-$250,93</p>
                            </div>
                        </div>
                        <div className="flex justify-between mb-5">
                            <div className="flex gap-2">
                                <div className="w-10 h-10 bg-white flex justify-center items-center rounded-full">
                                    <img className="" src={Netflix} alt="" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-base text-white">Netflix</h3>
                                    <p className="text-xs font-poppins text-white opacity-70">15 Days ago</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <img className="w-4 h-3" src={PolygonTwo} alt="" />
                                <p className='text-sm font-normal text-white'>-$250,93</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <div className="bg-[#DFFFF0] w-10 h-10 flex justify-center items-center rounded-full">
                                    <img src={Manulife} alt="" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-base text-white">Manulife Cash</h3>
                                    <p className="text-xs font-poppins text-white opacity-70">15 Days ago</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <img className="w-4 h-3" src={PolygonOne} alt="" />
                                <p className='text-sm font-normal text-white'>-$250,93</p>
                            </div>
                        </div>
                    </div>
                    <div className="make-payment mb-5 md:mb-0 mt-5 md:mt-0 md:absolute md:top-[-30%] md:right-[20px] lg:top-[-40%] lg:right-0 xl:right-[16%] xl:top-[-50%]">
                        <div className="flex gap-3 mb-5">
                           <div className='w-10 h-10 bg-white flex justify-center items-center rounded-full'>
                           <img className='rounded-full' src={Paypal} alt="Paypal" />
                           </div>
                           <div>
                           <h3 className="text-2xl font-poppins font-semibold text-white">Paypal</h3>
                           <p className="text-white opacity-70 text-xs font-normal">Checkout</p>
                           </div>
                        </div>
                        <div className="flex justify-between mb-5">
                            <div>
                                <p className="text-white opacity-70 text-xs font-normal">Total</p>
                                <h3 className="font-medium text-lg font-poppins text-white">$220</h3>
                            </div>
                            <div>
                                <button className="change-btn">Change</button>
                            </div>
                        </div>
                        <div>
                            <button className="make-payment-btn" onClick={()=>handlePayment()}>Make Payment</button>
                        </div>
                    </div>
                    </div>
                    <div className="">
                        <h2 className="text-white font-poppins text-6xl font-semibold mb-5">Easily control your billing & invoicing.</h2>
                        <p className="font-poppins text-lg text-white opacity-70 mb-5">One of the easiest ways to control your billing and invoicing is to use software specifically designed for this purpose. There are many options available, from simple invoicing tools to comprehensive billing platforms.</p>
                        <div className="flex gap-5">
                            <img src={AppStore} alt="App Store" />
                            <img src={PlayStore} alt="Play Store" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestTransactions;