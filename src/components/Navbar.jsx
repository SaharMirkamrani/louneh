import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import { LinkContainer } from 'react-router-bootstrap';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineBlock } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import Login from "./Login";
import LoginMobile from "./LoginMob"

const BootstrapNavbar = () => {
  return (
    <Navbar expand='lg' className='fixed-top bg-white shadow-lg'>
      <LinkContainer to='/' className="logo-container">
        <Nav.Link>
          <img src={Logo} alt='logo' className='nav-logo' />
        </Nav.Link>
      </LinkContainer>
      <Login />
      <Navbar.Toggle aria-controls='basic-navbar-nav' className='nav-toggle' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mx-auto text-center'>
          <LinkContainer to='/'>
            <Nav.Link className='d-flex nav-items'>
              <AiFillHome className='color-text mx-2 h5' />
              <p className='text-dark'>خانه</p>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to='/categories'>
            <Nav.Link className='d-flex nav-items'>
              <AiOutlineBlock className='color-text mx-2 h5' />
              <p className='text-dark'>دسته بندی ها</p>
            </Nav.Link>
          </LinkContainer>
					<LoginMobile />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BootstrapNavbar;
