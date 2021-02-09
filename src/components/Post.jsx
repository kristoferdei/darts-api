import React, { Component } from 'react'
import axios from 'axios'

const options = {
    headers: {
        'Accept': 'text/plain',
        'authToken': '26b17967-ff03-45d8-b584-22679de87d81',
    }
}

export class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            player1Id: '',
            player2Id: '',
            legsToWin: 0
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('/darts_api/createMatch', options, this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { player1Id, player2Id, legsToWin } = this.state
        return (
            <form className="w-full max-w-lg" onSubmit={this.submitHandler}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
                            player1Id
                            </label>
                        <input
                            className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
                            type="text"
                            placeholder="player1Id"
                            name="player1Id"
                            value={player1Id}
                            onChange={this.changeHandler} />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
                            player2Id
                            </label>
                        <input className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
                            type="text"
                            placeholder="player2Id"
                            name="player2Id"
                            value={player2Id}
                            onChange={this.changeHandler} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
                            legsToWin
                        </label>
                        <input className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
                            type="number"
                            placeholder="legsToWin"
                            name="legsToWin"
                            value={legsToWin}
                            min="0"
                            max="10"
                            onChange={this.changeHandler} />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <button type="submit"
                        className="w-full text-center py-3 font-medium rounded bg-gray-900 text-white border border-gray-900
                        hover:bg-transparent hover:border-gray-700 hover:text-gray-700 font-bold focus:outline-none">
                        Submit</button>
                </div>
            </form>
        )
    }
}

export default Post
