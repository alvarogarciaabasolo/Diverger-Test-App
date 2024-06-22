import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`

 :root {
  --color-PrimaryPurple: #AD1FEA;
--color-SecondaryBlue: #4661E6;
--color-LightSkyBlue: #62BCFA;  
--color-SkyBlue: #7C91F9;  
--color--Purple:#C75AF6;
--color-White: #FFFFFF; 
--color-MidnightBlue: #3A4374; 
--color-SoftBlueGrey: #647196; 
--color-GrayLight:#8C92B3;
--color-Coral: #F49F85;  
--color-Red: #D73737;  
 }
* { 
  margin:0;
  padding:0;
  box-sizing: border-box;
  
}
body {
  font-family: 'Jost', sans-serif;
  background: var(--color-VeryLightGrey);
}
`;
export default GlobalStyled;
