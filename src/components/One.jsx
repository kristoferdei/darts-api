import React, { Component } from 'react';

class One extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('/darts_api/matchLegs?matchId=f5e4728a-1fd4-4254-8b91-2716643f996e',
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
                        One match
                    </h1>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        {items
                            .sort((a, b) => a.numberOfLeg - b.numberOfLeg)
                            .map(item => (
                                <div className="w-full max-w-sm mx-auto rounded shadow overflow-hidden bg-white">
                                    <div className="px-5 py-3 bg-white">
                                        <h3 id="rf" className="text-gray-800 text-xl font-bold cursor-default">
                                            Leg: {item.numberOfLeg}
                                        </h3>
                                        <h3 id="rf" className="py-2 text-lg font-medium">Player1:</h3>
                                        {item.player1Throws.map(p1 => (
                                            <h3 className="cursor-default">Darts: {p1.darts} Score: {p1.score} Round: {p1.round}</h3>
                                        ))}
                                        <h3 id="rf" className="py-2 text-lg font-medium">Player2:</h3>
                                        {item.player2Throws.map(p2 => (
                                            <h3 className="cursor-default">Darts: {p2.darts} Score: {p2.score} Round: {p2.round}</h3>
                                        ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </main>
        );
    }
}

export default One;
