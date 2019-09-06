import React from 'react'

class CurrentClockClassic extends React.Component{
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


function CurrentClock(props) {

    // state
    const [currentTime, setCurrentTime] = React.useState(+new Date() / 1000);

    // reference for interval
    const ref = React.useRef(null);

    // side effect on componentDidMount 
    React.useEffect(() => {
        ref.current = setInterval(() => setCurrentTime(+new Date() / 1000), 1000);
        return () => clearInterval(ref.current);
    }, []);

    let Clock = props.clockType;

    return (
        <Clock seconds={currentTime + 4 * 3600 + 30 * 60} />
    );
}

export default CurrentClock;