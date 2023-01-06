import React from 'react'
import {useRef,useState,useEffect} from 'react'

function ProgressBar({min,max,value,onInput}) {
    const inputRef = useRef(null);
    const inputRefWidth = useRef(null);
    const[decimalValue, setDecimalValue] = useState();
    
    //useEffect
    useEffect(() => {
        const inputWidth= window.getComputedStyle(inputRef.current).width
        inputRefWidth.current = parseInt(inputWidth.replace('px',''))
        if(max > 1){
            setDecimalValue((value * 1) / max);
        }else{
            setDecimalValue(value);
        }
    })

    //func
    const timeStats= time => `${Math.floor(time/60)}:${(`0${Math.floor(time%60)}`).slice(-2)}`
    
    return (
        <div className="hidden bar-container w-[100%] md:flex justify-center items-center relative">
            <span className='mx-2 p-0 box-content text-[12px] text-white'>{max !==0 ? timeStats(value):"00:00"}</span>
            <input
                type="range" 
                ref={inputRef}
                value={value}
                min={min}
                max={max}
                onInput={onInput}
                step="0.001"
                className="slider-bar"
            />
            <span className='slider-circle absolute w-[10px] h-[10px] rounded-[50%] z-[1] opacity-0 pointer-events-none'
                    style={{left: `${(decimalValue * (inputRefWidth.current-3)) + 35}px`}}
            ></span>
            <span className='mx-2 p-0 box-content text-[12px] text-white'>{max !==0 ? timeStats(max):"00:00"}</span>
        </div>
    )
}

export default ProgressBar
