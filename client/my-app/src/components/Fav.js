import React from 'react';

import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MyForm from './myForm'

class Fav extends React.Component {

   constructor(props){
       super(props);
       this.state={
           favData:[],
					 slug:'',
					 name:'',
					 gender:'',
					 showForm:false

       }

   }

// the function for getting data from my DataBase: 
///////////////////////////////////////////////////////////
componentDidMount=async()=>{
    const dataReq=await axios.get(`http://localhost:3001/data`);
    this.setState({
        favData:dataReq.data,
    });
    console.log('the data added to api from get' , this.state.favData);
}

////////////////////////////////////////////////////////////////////
// Function to delete from the Data base:
deleteData=async (slug)=>{
	const deleteReq = await axios.delete(`http://localhost:3001/data/${slug}`);
	this.setState({
		favData:deleteReq.data,
	});
	console.log('the data after Deleting ' , this.state.favData);
}



updateName=(e)=>this.setState({name:e.target.value});
updateGender=(e)=>this.setState({gender:e.target.value});


showUpdateForm=(slug,name,gender)=>{
	this.setState({
		slug:slug,
		name:name,
		gender:gender,
		showForm:true,
	})
}

updateData=async(e)=>{
	e.preventDefault();
	const updateReq= await axios.put(`http://localhost:3001/data/${this.state.slug}` , {name:this.state.name , gender:this.state.gender});
	const dataReq=await axios.get(`http://localhost:3001/data`);
	this.setState({
			favData:dataReq.data,
	});
}






    render() { 
        return (
            <>
{this.state.showForm && 

<MyForm

updateData={this.updateData}
updateGender={this.updateGender}
updateName={this.updateName}
name={this.state.name}
gender={this.state.gender}
/>
}

            <Container>
             <Row>
							 {this.state.favData.map(item =>{
								 return(
									<Card style={{ width: '18rem' }}>
			
									<Card.Body>
									<Card.Title>{item.name}</Card.Title>
									<Card.Text>
											{item.gender}
										
											 <ul>
											{item.psiPowers.map(one=>
											<li>
												<p>
												{one.name}
											
													</p> 
													</li>
											)}
											</ul>
										 </Card.Text>
									 <Button onClick={e=>{this.deleteData(item.slug)}}  variant="danger"> Remove From Favorite</Button>
									 <br /> 
									 <br /> 
									 <Button onClick={e=>{this.showUpdateForm(item.slug, item.name,item.gender,)}} variant="primary"> update my Favorite</Button>
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
 
export default Fav;