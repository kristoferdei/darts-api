import React, { Component } from 'react';

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('/darts_api/players',
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
                        All players
                    </h1>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        {items.map(item => (
                            <div key={item.playerId} className="w-56 max-w-sm mx-auto rounded shadow overflow-hidden bg-gray-200">
                                <div
                                    className="flex items-end justify-end h-56 w-56 bg-cover
                                         bg-center bg-no-repeat"
                                    style={{ backgroundImage: `url(${item.avatarUrl})` }}
                                >
                                </div>
                                <div className="px-5 py-3 bg-white">
                                    <h3 id="rf" className="text-gray-800 text-lg font-bold cursor-default">
                                        {item.firstName} {item.lastName}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        );
    }
}

export default Player;
