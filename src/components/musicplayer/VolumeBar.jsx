import React,{useRef,useEffect,useState} from 'react'
import {BsVolumeDown,BsVolumeMute} from 'react-icons/bs'
import {IconContext} from 'react-icons'

function VolumeBar({value,onInput,max,min,handleToggleMute,prevValue}) {
    const inputRef=useRef(null)
    const prevVolume=useRef(null)

    const inputRefWidth = useRef(null);
    const[decimalValue, setDecimalValue] = useState();

    useEffect(() => {
        const inputWidth= window.getComputedStyle(inputRef.current).width
        inputRefWidth.current = parseInt(inputWidth.replace('px',''))
        if(max > 1){
            setDecimalValue((value * 1) / max);
        }else{
            setDecimalValue(value);
        }
        
    })


    return (
        <div className='hidden bar-container text-white md:flex justify-end items-center relative'>
            <IconContext.Provider value={{className:"h-7 w-7 text-white opacity-60 hover:opacity-100" }}>
                <div className="justify-self-start mr-[5px]">
                    {value > 0 ?
                        <BsVolumeDown style={{transform: 'translateX(-3.6px)' }} onClick={handleToggleMute} /> 
                    :
                        <BsVolumeMute onClick={handleToggleMute} />}
                </div>
            </IconContext.Provider>
            <input
                ref={inputRef}
                type="range" 
                max={max}
                min={min}
                value={value} 
                className="slider-bar w-[90px]"
                onInput ={onInput}
                step="0.01"
            />
            <span 
                className='slider-circle relative h-[10px] w-[10px] z-[20] opacity-100 rounded-[50%] pointer-events-none'
                style={{left: `${(decimalValue * (inputRefWidth.current-7)) - 93}px`}}
            ></span>
        </div>
    )
}

export default VolumeBar
