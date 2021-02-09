import React, { Component } from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Player from '../components/Player';

class Players extends Component {
    render() {
        return (
            <div className="w-screen h-screen bg-white">
                <Header />
                <Player />
                <Footer />
            </div>
        );
    }
}

export default Players;
