import {forwardRef} from 'react'
import styled from 'styled-components/macro'

const ColorSelectorContainer = styled.div`
    padding:4px;
    display:flex;
    background:red;
    
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
    background-color:blue;

    ${HiddenColorRadio}:checked + &{
        background-color:green;
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
const ColorSelector = forwardRef((props, ref)=>
    <RadioContainer>

        <HiddenColorRadio type="radio"
        
            {...props}
            id={props.name + '-' + props.value}

        />
        
        <StyledColorSelector htmlFor={props.name + '-' + props.value} />

    </RadioContainer>
)

export const TaskColorInput = forwardRef((props,ref)=>
    <ColorSelectorContainer>
        <ColorSelector name={props.name} value="abcd"/>
        <ColorSelector name={props.name} value="efgh"/>
        <ColorSelector name={props.name} value="efgh7"/>
        <ColorSelector name={props.name} value="efgh5"/>
        <ColorSelector name={props.name} value="efgh2"/>
    </ColorSelectorContainer>
)
