import React, { Component } from 'react'
import {Routes, Route} from'react-router-dom';
import Nav from './components/Nav';
import SignUp from './views/SignUp';
import Home from './views/Home';
import { BrowserRouter as Router} from 'react-router-dom'








export default class App extends Component {
  render() {
    return (
      
      
      <div>
        <Router>
        <Nav/>
        
        <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route exact path="/SignUp" element={<SignUp/>}/>
       
        </Routes>
        </Router>  
    </div>
        
    )
  }
}


