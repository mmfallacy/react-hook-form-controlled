
import {createGlobalStyle} from 'styled-components/macro'
export const GlobalStyles = createGlobalStyle`
    html, body, #root{
        height:100%;
        width: 100%;
        margin: 0;
        padding: 0;
        font-family: Roboto;
    }

    *{
        box-sizing: border-box;
        letter-spacing: .1px;
    }
`
