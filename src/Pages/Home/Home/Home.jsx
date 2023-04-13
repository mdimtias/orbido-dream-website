import React from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar";
import HandleMoney from "../HandleMoney/HandleMoney";
import LatestTransactions from "../LatestTransactions/LatestTransactions";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar></Navbar>
      <Hero></Hero>
      <LatestTransactions></LatestTransactions>
      <HandleMoney></HandleMoney>
    </>
  );
};

export default Home;
