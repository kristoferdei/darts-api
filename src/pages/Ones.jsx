import React, { Component } from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
import One from '../components/One';

class Ones extends Component {
    render() {
        return (
            <div className="w-screen h-screen bg-white">
                <Header />
                <One />
                <Footer />
            </div>
        );
    }
}

export default Ones;
