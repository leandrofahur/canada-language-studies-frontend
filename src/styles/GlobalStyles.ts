import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --black: #000000;
        --white: #ffffff;
        --primary: #BA404A;
        --secondary: #EBA417;
        --dark-gray: #343A40;
    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    html,
    body {
        max-width: 100vw;
        max-height: 100vh;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }    

    a { 
        text-decoration: none;
        color: var(--white);
    }
`;
