import React from 'react'
import useForceUpdate from './useForceUpdate';

class TimerClassic extends React.Component{
    
    componentDidMount() {
        this.interval=setInterval(() => {
            this.forceUpdate();
            }
        ,1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }


    render() {
        let time = (+this.props.number - +new Date()) / 1000

        let Clock =this.props.clockType;
        return(
            <div>
                <div>
                    <Clock seconds={time}/>
                </div>
            </div>
        )
    }
}



function Timer(props) {

    useForceUpdate(1000);

    console.log("f");

    let time = (+props.number - +new Date()) / 1000;

    let Clock =props.clockType;
    return(
        <div>
            <div>
                <Clock seconds={time}/>
            </div>
        </div>
    )

}


export default Timer;
