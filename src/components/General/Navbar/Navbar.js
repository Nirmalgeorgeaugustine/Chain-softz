//importing packages and components
import React,{useState,useEffect} from 'react';
//importing icons from react-icons
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../../../globalstyle';
import { Nav,OtherPageNav,NavbarContainer, NavLogo,MobileIcon, NavItem, NavLinks,NavMenu, NavItemBtn,NavBtnLink,NavIcon} from './Navbar.elements';
import Data from './navbar.json';


//Navbar function
function Navbar (props)  {
  const {home}=props;
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    useEffect(() => {
      window.addEventListener('resize', showButton);

      return()=>{
        window.removeEventListener('resize',showButton);
      }
    }, []);
  
    return (
        <>
          {home?
            (<Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={closeMobileMenu}>
                        <NavIcon/>
                        {Data.companyName}
                    </NavLogo>
                    <MobileIcon  onClick={handleClick}>
                        {click? <FaTimes/>:<FaBars/>}
                    </MobileIcon>

                    <NavMenu  onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/' onClick={closeMobileMenu}>
                            {Data.pageTitleOne}
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/about' onClick={closeMobileMenu}>
                            {Data.pageTitleTwo}
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/services' onClick={closeMobileMenu}>
                            {Data.pageTitleThree}
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/blogs' onClick={closeMobileMenu}>
                            {Data.pageTitleFour}
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                        {button ? (
                  <NavBtnLink to='/contactus'>
                    <Button primary>{Data.pageTitleFive}</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/contactus'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                    {Data.pageTitleFive}
                    </Button>
                  </NavBtnLink>
                )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>):
            
            (<OtherPageNav>
            <NavbarContainer>
                    <NavLogo to='/' onClick={closeMobileMenu}>
                        <NavIcon/>
                        {Data.companyName}
                    </NavLogo>
                    <MobileIcon  onClick={handleClick}>
                        {click? <FaTimes/>:<FaBars/>}
                    </MobileIcon>

                    <NavMenu  onClick={handleClick} click={click}>
                        
                        <NavItem>
                            <NavLinks to='/' onClick={closeMobileMenu}>
                            {Data.pageTitleOne}
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/about' onClick={closeMobileMenu}>
                            {Data.pageTitleTwo}
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/services' onClick={closeMobileMenu}>
                            {Data.pageTitleThree}
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/blogs' onClick={closeMobileMenu}>
                            {Data.pageTitleFour}
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                        {button ? (
                  <NavBtnLink to='/contactus'>
                    <Button primary>{Data.pageTitleFive}</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/contactus'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                    {Data.pageTitleFive}
                    </Button>
                  </NavBtnLink>
                )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </OtherPageNav>)}
        </>
    )
}

export default Navbar




