import React from 'react';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: (+props.number - +new Date()) / 1000
        }
    }
    
    componentDidMount() {
        this.interval=setInterval(() => {
            this.setState({time : this.state.time - 1});
            }
        ,1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(this.props.number.toString() !== nextProps){
            this.setState({time : (+nextProps.number - +new Date()) / 1000})
         }
    }

    render() {
        let Clock =this.props.clockType;
        return(
            <div>
                <div>
                    <Clock seconds={this.state.time}/>
                </div>
            </div>
        )
    }
}


export default Timer;
