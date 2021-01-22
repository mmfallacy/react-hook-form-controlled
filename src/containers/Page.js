import styled from 'styled-components/macro';
import backgroundSVG from './background.svg'

export const Page = styled.div`
    display:flex;
    flex-direction:column;
    background-color:white;
    position:relative;
    width:100%;
    min-height: 100%;
    padding:16px;
    background-image:url(${backgroundSVG});
`