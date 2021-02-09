import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="bg-gray-900">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <p id="rf" className="text-xl font-medium text-white cursor-default">Kristof Erdei</p>
                    <p id="rf" className="py-2 text-lg font light text-white sm:py-0 cursor-default">2021</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
