
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
        
        return (
            <div>
                {this.state.showingTimer ? <Timer /> : null}

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