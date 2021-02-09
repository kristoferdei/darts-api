import React, { Component } from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Post from '../components/Post';

class PostMatch extends Component {
    render() {
        return (
            <div className="bg-gray-300 h-screen w-screen flex flex-col">
                <Header />

                <div className="p-8 container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-gray-300 px-6 py-8 rounded-lg text-black w-full">
                        <h1 id="rf" className="mb-8 -mt-8 pb-10 text-center font-medium text-gray-800 text-5xl cursor-default">
                            Create Match
                        </h1>
                        <Post />
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default PostMatch;
