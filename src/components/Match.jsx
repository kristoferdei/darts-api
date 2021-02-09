import React, { Component } from 'react';

class Match extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('/darts_api/allMatches',
      {
        method: 'GET',
        headers: {
          'Accept': 'text/plain',
          'authToken': '26b17967-ff03-45d8-b584-22679de87d81',
        }
      })
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true,
        })
      }).catch((err) => {
        console.log(err);
      });

  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded)
      return <div id="rf" className="w-screen h-screen p-8 bg-gray-200 text-xl text-gray-900 font-medium">Loading...</div>;

    return (
      <main className=" pb-8 bg-gray-200">
        <div className="container mx-auto px-6 pt-8">
          <h1 id="rf" className="text-gray-800 text-4xl font-medium cursor-default">
            All matches
        </h1>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {items.map(item => (
              <div key={item.matchId} className="w-full max-w-sm mx-auto rounded shadow overflow-hidden bg-gray-200">
                <div
                  className="h-40 w-1/2 bg-cover border-t-2 border-b-2 border-l-2 border-gray-200 rounded
                                         bg-center bg-no-repeat float-left"
                  style={{ backgroundImage: `url(${item.player1.avatarUrl})` }}
                >
                </div>
                <div
                  className="h-40 w-1/2 bg-cover border-t-2 border-b-2 border-l-2 border-r-2 border-gray-200 rounded
                                         bg-center bg-no-repeat float-left"
                  style={{ backgroundImage: `url(${item.player2.avatarUrl})` }}
                >
                </div>
                <div className="px-5 py-3 mt-40 bg-white">
                  <h3 id="rf" className="text-gray-800 text-xl font-bold cursor-default">
                    {item.player1.firstName} {item.player1.lastName}
                  </h3>
                  <h3 id="rf" className="text-gray-700 text-xl font-medium cursor-default">
                    vs.
                  </h3>
                  <h3 id="rf" className="text-gray-800 text-xl font-bold cursor-default">
                    {item.player2.firstName} {item.player2.lastName}
                  </h3>
                  <span className="text-gray-700 text-lg mt-2 cursor-default">
                    Score: {item.player1Score} - {item.player2Score}
                    <br />
                  </span>
                  <span className="text-gray-600 mt-2 cursor-default">
                    Legs to win: {item.legsToWin}
                    <br />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default Match;
