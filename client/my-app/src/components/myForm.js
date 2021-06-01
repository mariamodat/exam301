import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class MyForm extends React.Component {
    
    render() { 
        return (  
            <Form style={{width:'600px' , marginLeft:'100px' ,textAlign:'center' , fontFamily: `'Pattaya', sans-serif`}} onSubmit={(e)=>this.props.updateData(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>  Enter the Name</Form.Label>
             <Form.Control onChange={(e)=>{this.props.updateName(e)}} type="text" placeholder="Enter Name" value={this.props.name} />
    
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label> Gender</Form.Label>
                  <Form.Control  onChange={(e)=>{this.props.updateGender(e)}} type="text" placeholder="Gender"  value={this.props.gender}/>
                </Form.Group>
 
                <Button variant="primary" type="submit">
                  Update Me 💞
                 </Button>
                 <br />
                 <br />
                 <br />
                 <br />
            </Form>
        );
    }
}
 
export default MyForm;