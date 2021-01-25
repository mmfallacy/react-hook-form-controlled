
import {createGlobalStyle} from 'styled-components/macro'
export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
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
