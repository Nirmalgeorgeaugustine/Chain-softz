//importing packages and components
import {Container} from '../../../globalstyle';
import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';

//Nv stying
export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  z-index: 999;
`;

//OtherPageNav styling
export const OtherPageNav = styled.nav`
  background: rgb(33,68,196);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  z-index: 999;
`;

//NavbarContainer styling
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container};
`;

//NavLogo styling
export const NavLogo = styled(Link)`
  margin-left:3rem;
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  transition:all 400ms ease-in-out;

  //media query
  @media screen and (max-width:450px){
    margin-left:1rem;
  }

  //media query
  @media screen and (max-width:360px){
    font-size: 1.7rem;
  }
`;

//NavIcon styling
export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

//MobileIcon styling
export const MobileIcon = styled.div`
  display: none;
  //media query
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color:#fff;
    cursor: pointer;
  }

  //media query
  @media screen and (max-width: 360px){
      margin-top:0.6rem;
      font-size: 1.6rem;
  }
`;

//NavMenu styling
export const NavMenu = styled.ul`
  display: flex;
  margin-right:4rem;
  align-items: center;
  list-style: none;
  text-align: center;

  //media query
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 82vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease-in-out;
    background: #101522;
  }
`;

//NavItem styling
export const NavItem = styled.li`
  height: 40px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #fff;
  }

  //media query
  @media screen and (max-width: 960px) {
    width: 100%;
    margin:1.5rem;
    font-size:1.5rem;
    &:hover {
      border: none;
    }
  }
`;

//NavItemBtn styling
export const NavItemBtn = styled.li`

  //media query
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

//NavLinks styling
export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  transition:all 300ms ease-in-out;

  //media query
  @media screen and (max-width: 960px) {
    color:#fff;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    //hover
    &:hover {
      color: rgb(33,68,196);
      transition: all 0.3s ease;
      margin-top:0;
    }
  }
  //hover
  :hover{
    margin-top:-0.4rem;
  }
`;

//NavBtnLink styling
export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;