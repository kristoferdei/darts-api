import React, { Component } from 'react'

class Header extends Component {

  render() {

    return (
      <nav className="bg-gray-900 font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <a id="rf" href="/" className="text-2xl text-white hover:text-blue-dark">Darts API</a>
        </div>
        <div>
          <a id="rf" href="/matches" className="text-lg hover:text-white hover:underline text-white ml-2 pr-6">Matches</a>
          <a id="rf" href="/players" className="text-lg hover:text-white hover:underline text-white ml-2 pr-6">Players</a>
          <a id="rf" href="/ones" className="text-lg hover:text-white hover:underline text-white ml-2 pr-6">One</a>
          <a id="rf" href="/post" className="text-lg hover:text-white hover:underline text-white ml-2">Create</a>
        </div>
      </nav>
    );
  }
}

export default Header;
