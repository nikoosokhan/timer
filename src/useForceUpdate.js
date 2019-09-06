import React from 'react';

function useForceUpdate(refreshEveryMs) {
    const [ , setTime]=React.useState();

    const ref= React.useRef(null);

    React.useEffect(() => {
        ref.current = setInterval(() => setTime(Math.random()) ,refreshEveryMs);
        return () => clearInterval(ref.current);
    }, []);
}

export default useForceUpdate;