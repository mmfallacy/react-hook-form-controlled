import {forwardRef} from 'react';
import styled from 'styled-components/macro';

const NumericInputContainer = styled.div`
    
`
const NumericInputHeader = styled.header`
    font-size: 14px;
    font-weight: 400;
`
const NumericInput = styled.input`
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


    &::selection{
        background-color:transparent
    }
`

export const TaskNumericInput = forwardRef(({header,defaultValue=0,...props},ref)=>{
    const handleKeyPress = (e)=>{
        if (isValidKey(e.which)) return

        e.preventDefault()
    }
    return (
        <NumericInputContainer>
            <NumericInput type="tel"
                {...props}
                defaultValue={defaultValue}
                onKeyPress={handleKeyPress}
                onFocus={e=>e.target.select()}
                ref={ref}
            />

            <NumericInputHeader>
                {header}
            </NumericInputHeader>
        </NumericInputContainer>
    )
})

const isValidKey = (keycode) => 
    (keycode >= 48 && keycode <= 57) || // 0-9
    (keycode >= 96 && keycode <= 105) // 0-9 Numpad