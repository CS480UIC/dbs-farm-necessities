import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    setShowNavbar(document.body.getBoundingClientRect().top > scrollPos);
  };

  let navDisplay = showNavbar ? 'nav-active' : 'nav-hidden';

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Styles>
      <Navbar
        fixed="top"
        expand="md"
        variant="light"
        className={`${navDisplay} ${scrollPos === 0 ? 'nav-max-height' : ''}`}
        expanded={expanded}
      >
        <Navbar.Brand className="py-0 px-1" as={Link} to="/">
          Equip Your Farm
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-collapse" onClick={() => setExpanded(expanded ? false : 'expanded')} />
        <Navbar.Collapse>
          <Nav className="mx-auto">
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/shop">
              Shop
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/cart">
              Cart
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/profile">
              Profile
            </Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/auth">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

const Styles = styled.div`
  nav {
    padding: 0.6rem 1.25rem;
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    background-color: var(--light-gray);
    box-shadow: 0 10px 30px -10px var(--navy-shadow);
    gap: 10px;
    backdrop-filter: blur(10px);
    filter: none;
    transition: var(--transition);
  }

  .nav-active {
    transform: translateY(0px);
  }

  .nav-hidden {
    transform: translateY(calc(var(--nav-scroll-height) * -1));
  }

  .navbar-nav {
    gap: 5px;
  }

  a {
    margin: 0 0.4rem;
    :not(.btn) {
      color: var(--dark-navy) !important;
      line-height: 1.7;
    }
  }

  a.active,
  a:hover,
  a:focus {
    color: var(--orange) !important;
  }

  @media (min-width: 768px) {
    nav {
      min-height: var(--nav-scroll-height);
    }

    .nav-max-height {
      min-height: var(--nav-height);
    }
  }

  @media (max-width: 768px) {
    .green-btn {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;

export default Navigation;
