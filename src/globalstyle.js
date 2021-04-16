//importing global style from styled-components
import styled, { createGlobalStyle } from 'styled-components';


//stylings
const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Rajdhani', sans-serif;
 } 
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 70px;
  padding-left: 70px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#28a745' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '1.5rem' : '20px')};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#2a5032' : '#4B59F7')};
  }
  @media screen and (max-width: 960px) {
    width: 50%;
  }
`;

export const UpperCaseTitle=styled.h5`
    text-transform:uppercase;
    margin-bottom:.5rem;
    color:rgb(33,68,196);
    font-weight:800;
    padding:0 2rem;
    font-size:18px;
`;

export const ContentTitle=styled.h1`
margin:0;
font-weight:700;
font-size:2.7rem;
color:#000;
`

export default GlobalStyle;