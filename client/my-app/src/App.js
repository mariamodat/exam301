
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Fav from './components/Fav';

class App extends React.Component {
 
  render() { 
    return (  
     
      <>
      <BrowserRouter>
        <Header/>
<Switch>


<Route exact path="/">
  <Main/>
</Route>

<Route exact path = "/fav" >
  <Fav/>
</Route>



</Switch>
<Footer/>

      </BrowserRouter>

      </>
    );
  }
}
 
export default App;

