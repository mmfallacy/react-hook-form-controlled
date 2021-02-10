import {forwardRef} from 'react'
import styled from 'styled-components/macro'

const ColorSelectorContainer = styled.div`
    display:flex;
    
    & > *:not(:first-child){
        margin-left:8px;
    }
`

const HiddenColorRadio = styled.input`
    visibility:hidden;
    position: absolute;
    top:0;
    left:0;
`

const StyledColorSelector = styled.label`
    height:20px;
    width:20px;
    border-radius:20px;
    background-color:${props=>props.color};

    ${HiddenColorRadio}:checked + &{
        box-shadow: 0 0 0 3px yellow
    }
`

const RadioContainer = styled.div`
    height:20px;
    width:20px;
    display:flex;
    align-items: center;
    justify-content:center;
    position: relative;
`

/** Color Selector Component */
const ColorSelector = forwardRef(({color, ...props}, ref)=>
    <RadioContainer>

        <HiddenColorRadio type="radio"
            {...props}
            id={props.name + '-' + props.value}
        />
        
        <StyledColorSelector color={color} 
            htmlFor={props.name + '-' + props.value} 
        />

    </RadioContainer>
)

export const TaskColorInput = forwardRef(({colors, ...props},ref)=>
    <ColorSelectorContainer>

        {colors.map((color, i)=>
            <ColorSelector
                key = {color}
                color = {color}
                value = {color}
                {...props}

                defaultChecked = {(i===0)}
                ref={ref}
            />
        )}

    </ColorSelectorContainer>
)
