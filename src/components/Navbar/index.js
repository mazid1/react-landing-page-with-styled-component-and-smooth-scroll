import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { MenuIcon, Nav, NavbarContainer, NavItem, NavLink, NavLogo, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/'>
            logo
          </NavLogo>
          <MenuIcon onClick={toggle}>
            <FaBars />
          </MenuIcon>
          <NavMenu>
            <NavItem>
              <NavLink to='about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='discover'>Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='services'>Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='signup'>Sign Up</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
