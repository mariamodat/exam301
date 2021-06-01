import React from 'react';

import axios from "axios";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class Main extends React.Component {
    constructor (props){
        super(props);
        this.state={
            apiData:[],
            apiUrl:process.env.REACT_APP_SERVER_URL,
						msg:'',
						show:false,
        }
    }


    // function to render the data from my API :
componentDidMount=async()=>{
    const expressReq=await axios.get(`http://localhost:3001/data1`);
    this.setState({
        apiData:expressReq.data,
    });
    console.log( 'the api Data ' , this.state.apiData);
}







addFavItem = async (theObj)=>{
	const postRequest=await axios.post(`http://localhost:3001/data` , theObj);
	this.setState({
		msg:postRequest.data,
		show:true,
	})
	console.log('the msg' , this.state.msg);
	
}



   
    render() { 
        return (
            <>
						{this.state.show && 
						<h2> {this.state.msg}</h2>
						}
						
           <Container style={{ fontFamily: `'Courgette', cursive`}}>
             <Row>
							 {this.state.apiData.map(item =>{
								 return(
									<Card style={{ width: '18rem' }}>
			
									<Card.Body>
									<Card.Title style={{fontFamily: `'Courgette', cursive` , color:'#0a9396' ,fontSize:'1.9rem'}}>{item.name}</Card.Title>
									<Card.Text style={{
										fontSize:'1.4rem' , color:'#003049'
										 }} >
											{item.gender}
										 </Card.Text>
										 <Card.Img variant="top" src={item.img} />
										 <Card.Text style={{
											 backgroundColor:'#ccd5ae'
										 }}>
											 <ul>
											{item.psiPowers.map(one=>
											<li>
												<p>
												{one.name}
												<img style={{width:'30px' , height:'30px'}} src={one.img} alt="img" />
													</p> 
													</li>
											)}
											</ul>
										 </Card.Text>
									 <Button onClick={e=>{this.addFavItem(item)}} variant="primary">Add to Favorite</Button>
									 </Card.Body>
										</Card>
									
								 )

			

							 })}
           
             </Row>
            </Container>
            </>
         );
    }
}
 
export default Main;