import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <section className="w-full">
        <div className="flex bg-gray-300" style={{ height: 'calc(100vh - 122px)' }}>
          <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
              <h1 id="rf" className="text-3xl font-bold text-red-600 md:text-4xl cursor-default">
                Darts <span className="text-green-600 cursor-default">API</span>
              </h1>
              <p className="mt-2 text-sm text-gray-700 md:text-base text-justify cursor-default">
                Darts or dart-throwing is a competitive sport in which two or more players bare-handedly throw small sharp-pointed missiles known as darts at a round target known as a dartboard. Darts players are sometimes termed "dartists".
              </p>
              <div className="flex justify-center lg:justify-start mt-6">
                <a
                  className="w-24 text-center px-4 py-3 bg-gray-900 text-white border border-gray-900 rounded hover:bg-transparent hover:border-gray-700 font-medium hover:text-gray-700 focus:outline:none"
                  href="/matches"
                >
                  Matches
                </a>
                <a
                  className="w-24 text-center mx-4 px-4 py-3 border border-gray-700 bg-transparent text-gray-700 font-medium rounded hover:bg-gray-900 hover:text-white focus:outline-none"
                  href="/players"
                >
                  Players
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%' }}>
            <div
              className="h-full bg-cover"
              style={{
                backgroundImage: 'url(https://i.postimg.cc/tgBGHD30/darts.jpg)',
              }}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
