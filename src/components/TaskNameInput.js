import {forwardRef} from 'react'
import styled from 'styled-components/macro'

const StyledInput = styled.input`
    display:block;
    background:none;
    border:none;
    padding:4px;
    width:100%;
    font-size: 20px;
    font-weight: 600;
    &:placeholder-shown{
        border-bottom:1px solid #D0E8FF;
    }
    &::placeholder{
        color: #D0E8FF;
        font-weight:400;
    }
`

export const TaskNameInput = forwardRef((props,ref)=>
        <StyledInput
            placeholder = "Task Name"
            ref={ref}
        />
)