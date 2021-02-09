import React, { Component } from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';

class Landing extends Component {
    render() {
        return (
            <div className="w-screen h-screen bg-white">
                <Header />
                <Hero />
                <Footer />
            </div>
        );
    }
}

export default Landing;
