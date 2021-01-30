
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
`

export const TaskTimeInput = ()=>{



    return (
        <TimeInputContainer>
            <TimeInput type="tel"
                defaultValue="00:00"
            />
            <TimeInputHeader>
                Work Interval
            </TimeInputHeader>
        </TimeInputContainer>
    )
}