import styled from 'styled-components/macro';


const FormSectionWrapper = styled.div`
    width:100%;
    min-height:200px;
`

const FormSectionContainer = styled.div`
    width:100%;
    background-color: #87C5FF;
    padding: 24px;
    border-radius:16px;

    & > *:not(:last-child){
        margin-bottom:16px
    }
`

const FormSectionHeader = styled.header`
    margin-left:8px;
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