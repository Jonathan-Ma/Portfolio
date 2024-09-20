import React from 'react';

function WeatherWidget() {
    return (
        <div
            className={'flex flex-col flex-wrap absolute top-[5rem] right-[7rem] h-[10rem] w-[10rem] rounded-lg backdrop-blur-[0.2rem] backdrop-brightness-90 justify-center content-center'}>
            <div></div>
            <div>45</div>
            <div>45</div>
            <div>45</div>
        </div>
    );
}

export default WeatherWidget;
