import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`

 :root {
--color-Black: #000000;
--color-White: #FFFFFF; 
--color-BrightYellow: #feda4a;
--color-LighterYellow: #ffeb3b;

 }
 
* { 
  margin:0;
  padding:0;
  box-sizing: border-box;
  
}
body {
    background-color: black;
    color: white;
    font-family: 'Star Jedi', Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
h1, h2, h3, h4, h5, h6, p, li {
    color: white;
  }
`;
export default GlobalStyled;
