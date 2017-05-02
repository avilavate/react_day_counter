import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
        this.state = {
            'days': 0,
            'hors': 0,
            'minutes': 0,
            'seconds': 0,
            'input': '',
            'deadLine': ''
        };
        this.setState({ 'deadLine': this.props.deadline });
        this.getDifference();
    }

    componentDidMount() {
        setInterval(() => {
            this.getDifference();
        }, 1000, this);
    }

    getDifference() {
        if (!(!!Date.parse(this.props.deadline))) return;

        // 
        let deadLine = Date.parse(this.state.deadLine);
        // get total seconds between the times
        var delta = Math.abs(new Date() - deadLine) / 1000;
        console.log("delta", delta);
        // calculate (and subtract) whole days
        let days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        let hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        let minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        // what's left is seconds
        let seconds = Math.floor((delta % 60));
        this.setState({
            'days': days,
            'hors': hours,
            'minutes': minutes,
            'seconds': seconds
        }
        )
    }
    render() {
        return (
            <div className="Counter">
                <h3>Total {this.state.days} day(s), {this.state.hors} hour(s), {this.state.minutes} minute(s) and {this.state.seconds} second(s) </h3>
                <h4>for</h4>
                <h2>{this.state.deadLine}</h2>

                <input type="text" placeholder="Enter date from" onChange={this.getNewDeadline.bind(this)} />
            </div>
        )
    }
    getNewDeadline(e) {
        console.log(e);

        this.setState({ deadLine: e.target.value }, () => {
            console.log(this.state.deadLine);
        });

    }
}

export default Counter;