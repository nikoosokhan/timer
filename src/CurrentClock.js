import React from 'react'

class CurrentClock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTime: +new Date()/1000
        }
    }
    componentDidMount() {
        this.interval=setInterval(()=>
           this.setState({currentTime : +new Date()/1000})
        ,1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }


    render() {
        let Clock = this.props.clockType;
        return(
            <Clock seconds={this.state.currentTime+4*3600+30*60}/>
        )
    }
}
export default CurrentClock;