import React, { Component } from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Match from '../components/Match';

class Matches extends Component {
    render() {
        return (
            <div className="w-screen h-screen bg-white">
                <Header />
                <Match />
                <Footer />
            </div>
        );
    }
}

export default Matches;
