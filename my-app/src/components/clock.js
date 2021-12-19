import React from "react";

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hour: new Date().toLocaleTimeString(), data: [] };
        this.timer = null
        this.initClock()
    }
    async componentDidMount() {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/')
        let responseAsJson = await response.json()
        this.setState({ data: responseAsJson })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState)
    }
    initClock = () => {
        this.timer = setInterval(() => {
            this.setState({
                hour: new Date().toLocaleTimeString()
            })
        }, 1000)
    }
    render() {
        return (
            <div>
                <h2>It is {this.state.hour}.</h2>
                <ol>
                    {this.state.data.map((el) => <li key={el.id}>{el.title}{el.body}</li>)}
                </ol>
            </div>
        );
    }
}

export class ClockES7 extends React.Component {

    state = {
        hour: new Date().toLocaleTimeString(),
        data: []
    };
    async componentDidMount() {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/')
        let responseAsJson = await response.json()
        this.setState({ data: responseAsJson })
        this.initClock()

    }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevProps, prevState)

    // }
    initClock = () => {
        console.log(this)
        this.timer = setInterval(() => {
            this.setState({
                hour: new Date().toLocaleTimeString()
            })
        }, 1000)
    }
    render() {
        return (
            <div>
                <h2>It is {this.state.hour}.</h2>
                <ol>
                    {this.state.data.map((el) => <li key={el.id}>{el.title}{el.body}</li>)}
                </ol>
            </div>
        );
    }
}
