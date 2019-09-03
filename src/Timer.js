import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: 5
        }
    }
    handleClick(){
        this.setState({time : this.state.time*3600});

        setInterval(()=>{
            this.setState({time : this.state.time-1});
            }
        ,1000)
    }

    render() {
        return(
            <div>
                <div>
                    {   parseInt(this.state.time/3600%24)+ ':' +
                        parseInt(this.state.time/60%60)+ ':' +
                        parseInt(this.state.time%60)
                    }
                </div>
                <div>
                    <button onClick={()=>this.handleClick()}>click me</button>
                </div>
            </div>
        )
    }
}

export default Timer;
