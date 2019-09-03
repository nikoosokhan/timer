
import React from 'react'
import Timer from "./Timer";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            offerEndDate: 'Tue Sep 03 2019 23:53:10 GMT+0430',
        }
    }

    //methods

    render() {
        let date = new Date(this.state.offerEndDate);

        return (
            <div>
                <Timer number={date}/>

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