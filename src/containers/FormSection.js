import styled from 'styled-components';


const FormSectionWrapper = styled.div`
    background-color:red;
    width:100%;
    height:200px;
`

const FormSectionContainer = styled.div`
    width:100%;
    background-color: #87C5FF;
`

export const FormSection = ({header = null, children}) => 
    <FormSectionWrapper>
        {header !== null && <header>{header}</header> }
        <FormSectionContainer>

        </FormSectionContainer>
    </FormSectionWrapper>