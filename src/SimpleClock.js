import React from 'react';
//is the component that just get seconds and show digital

import {useHover} from 'react-unified'

function SimpleClock(props){
    let {seconds} = props;
    let h = parseInt(seconds/3600%24);
    let m = parseInt(seconds/60%60);
    let s = parseInt(seconds%60);

    const divRef = React.useRef(null);
    const isHover = useHover(divRef);
        
    return(
        <div ref={divRef} style={{backgroundColor: isHover ? 'yellow' : 'white'}}>
            {twoDigits(h) + ':' + twoDigits(m) + ':' + twoDigits(s)}
        </div>
    )
}

function twoDigits(number) {
    if(number < 10){
        return '0' + number
    }
    return '' + number
}


export default SimpleClock;