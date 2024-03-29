import React from 'react'
import Timer from "./Timer";
import SimpleClock from "./SimpleClock";
import CurrentClock from "./CurrentClock";
import RedClock from "./RedClock";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            offerEndDate: 'Wed Sep 6 2019 20:28:16 GMT+0430',
        }
    }

    render() {
        let date = new Date(this.state.offerEndDate);

        return (
            <div>
                <Timer number={date} clockType={SimpleClock}/>
                <CurrentClock clockType={RedClock}/>

                <span>{this.state.offerEndDate}</span>

                <br/>

                <div>
                    <button 
                        onClick={() => this.setState({offerEndDate: nextDate(date)})}
                    >click me</button>
                </div>
            </div>
        )
    }
}

function nextDate(date) {
    return (new Date(+date + (Math.random() * 1000 * 60 * 60 * 6)).toString());
}

export default App;