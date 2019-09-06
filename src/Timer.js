import React from 'react';

class Timer extends React.Component{
    
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

// function Timer(props) {
//     const [time , setTime]=React.useState((+props.number - +new Date()) / 1000);
//
//     const ref= React.useRef(null);
//
//
//     React.useEffect(() => {
//         ref.current=setInterval(() => setTime( time - 1) ,1000);
//         return () => clearInterval(ref.current);
//     }, [time]);
//
//
//
//     let Clock =props.clockType;
//     return(
//         <div>
//             <div>
//                 <Clock seconds={time}/>
//             </div>
//         </div>
//     )
//
// }


export default Timer;
