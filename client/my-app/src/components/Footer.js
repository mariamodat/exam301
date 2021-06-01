
import React from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Footer extends React.Component {
  
    render() { 
        return (
   <>
     <Navbar style={{marginTop:'500px'}} bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home"> &copy; Done By Mariam Odat </Navbar.Brand>
   
     
   
    </Container>
 	 </Navbar>

  	<br />
	 </>
          );
    }
}
 
export default Footer;