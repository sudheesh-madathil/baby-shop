import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "./creatcontext";

function Navs() {
 
  const {cartItems} = useContext(CartContext);
  return (
    <>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbars'>
      <Container>
        <img src="https://img.freepik.com/free-vector/baby-board-design_24908-54575.jpg?w=740&t=st=1685426872~exp=1685427472~hmac=2b778a16596701efbd92f43677a1f2ded113cb348dfe53962c661744b64c2c8b" alt="log" style={{height:'6vw'}} />
        <Navbar.Brand href="#home"><h3>BABY_Z</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to='/'>HOME</Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="Login">Login</Nav.Link>
            <Link  className='nav-link' to='/Cart'>
              Cart <h1> {cartItems.length}</h1>
              
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export{Navs};