import React, { useState } from 'react';

const Clock = () => {

    const time = new Date().toLocaleTimeString();

    const [cTime, setCtime] = useState(time);

    const updateTime = () => {
        const newTime = new Date().toLocaleTimeString([],{hour12: true});
        setCtime(newTime);
    }
    setInterval(updateTime, 1000);

    return (
        <>

            <div className='container justify-content-center'>
            <h1 className='text-center text-white'>Digital Clock</h1>
                <div className='col-sm-4 main_div ' >
                    
                <h1 onLoad={updateTime} >{cTime}</h1> 
                </div>

            </div>

        </>
    );
}

export default Clock;
