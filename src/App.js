
import React from 'react'
import Timer from "./Timer";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showingTimer: false,
        }
    }

    //methods

    render() {
        let date = new Date('Tue Sep 03 2019 23:53:10 GMT+0430');

        return (
            <div>
                {this.state.showingTimer ? <Timer number={date}/> : null}

                <div>
                    <button 
                        onClick={() => this.setState({showingTimer: !this.state.showingTimer})}
                    >click me</button>
                </div>
            </div>
        )
    }
}

export default App;