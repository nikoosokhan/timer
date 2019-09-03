import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: 5 * 3600
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({time : this.state.time - 1});
            }
        ,1000)
    }

    render() {
        let {time:seconds} = this.state;
        let h = parseInt(seconds/3600%24);
        let m = parseInt(seconds/60%60);
        let s = parseInt(seconds%60);
        return(
            <div>
                <div>
                    {
                        twoDigits(h) + ':' + twoDigits(m) + ':' + twoDigits(s)
                    }
                </div>
            </div>
        )
    }
}

function twoDigits(number) {
    if(number < 10){
        return '0' + number
    }
    return '' + number
}

export default Timer;
