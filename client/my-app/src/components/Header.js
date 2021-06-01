
import React from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Header extends React.Component {
  
    render() { 
        return (
   <>
     <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">pyschonauts</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
      <Nav.Link href="http://localhost:3000/fav">Fav</Nav.Link>
     
    </Nav>
    </Container>
 	 </Navbar>

  	<br />
	 </>
          );
    }
}
 
export default Header;