import styled from 'styled-components/macro';


const FormSectionWrapper = styled.div`
    width:100%;
    height:200px;
`

const FormSectionContainer = styled.div`
    width:100%;
    background-color: #87C5FF;
    padding: 16px;
    border-radius:16px;

    & > *:not(:last-child){
        margin-bottom:16px
    }
`

const FormSectionHeader = styled.header`
    margin-bottom: 16px;
    font-size:12px;
    font-weight:bolder;
`

export const FormSection = ({header = null, children}) => 
    <FormSectionWrapper>
        {header !== null && <FormSectionHeader>{header}</FormSectionHeader> }
        <FormSectionContainer>
            {children}
        </FormSectionContainer>
    </FormSectionWrapper>