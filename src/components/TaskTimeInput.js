
import {useState, useRef} from 'react';
import styled from 'styled-components/macro';

const TimeInputContainer = styled.div`
    
`
const TimeInputHeader = styled.header`
    font-size: 14px;
    font-weight: 400;
`
const TimeInput = styled.input`
    font-size: 48px;
    font-weight: bolder;
    background:none;
    border:none;
    margin-left:-4px;
    padding:0px;
    width:100%;
    caret-color: transparent;

    &:focus{
        color:white;
    }
`

export const TaskTimeInput = ()=>{

    const [time, setTime] = useState([0,0,0,0])

    const handleKeyDown = (e) => {

        if (!isValidKey(e.which)) return;

        // Parse key as integer, if Backspace represent as 0
        const numKey = (e.which === 8)? 0: parseInt(e.key) 

        setTime( prev => [...prev.slice(1,4), numKey]) 
        
    }
    return (
        <TimeInputContainer>
            <TimeInput type="tel"
                value={displayTime(time)}
                onKeyDown={handleKeyDown}
                readOnly
            />
            <TimeInputHeader>
                Work Interval
            </TimeInputHeader>
        </TimeInputContainer>
    )
}

const isValidKey = (keycode) => 
    (keycode >= 48 && keycode <= 57) || // 0-9
    (keycode >= 96 && keycode <= 105) || // 0-9 Numpad
    (keycode == 8) // Backspace

const displayTime = ([m1,m2,s1,s2]) => `${m1}${m2}:${s1}${s2}`

const timeToSeconds = ([m1,m2,s1,s2]) => ((m1*10 + m2) * 60) + (s1*10) + s2
