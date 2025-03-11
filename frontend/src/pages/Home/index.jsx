import React from "react";
import ListTrip from "../../components/ListTrip";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../Home/Home.css";

const Home = () =>  {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-between" style={{ background: "rgba(241, 241, 241, 1)" }}>
      <div className="container py-4">
        <Header />
        <ListTrip />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
