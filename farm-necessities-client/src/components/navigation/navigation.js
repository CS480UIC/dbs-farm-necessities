import decode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../../actions/auth-actions';
import { initializeDatabase } from '../../actions/initialize-database-actions';

const Navigation = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();

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

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleLogout = () => {
    dispatch(logout(history));
    setUser(null);
  };

  const handleInitializeDatabase = () => {
    dispatch(initializeDatabase());
  };

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
          <Nav className="ml-auto">
            <NavDropdown title="Entities">
              <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/address">
                Address
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/cart">
                Cart
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/category">
                Category
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/order-detail">
                Order Detail
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/order-history">
                Order History
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/payment-detail">
                Payment Detail
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/product">
                Product
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/product-category">
                Product-Category
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setExpanded(false)} as={Link} to="/rating">
                Rating
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/users">
              Users
            </Nav.Link>
            {user?.result ? (
              <Nav.Link className="pt-0" onClick={() => setExpanded(false)} as={Link} to="/auth">
                <Button onClick={handleLogout}>Logout</Button>
              </Nav.Link>
            ) : (
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/auth">
                Log In
              </Nav.Link>
            )}
            <Nav.Link className="pt-0" onClick={() => setExpanded(false)} as={Link} to="/auth">
              <Button onClick={handleInitializeDatabase}>Initialize Database</Button>
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
    font-size: var(--fz-sm);
    background-color: var(--light-gray);
    box-shadow: 0 10px 30px -10px var(--navy-shadow);
    gap: 10px;
    backdrop-filter: blur(10px);
    filter: none;
    transition: var(--transition);
  }

  button,
  .dropdown-item {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
  }

  .dropdown-item {
    margin: 0px;
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
