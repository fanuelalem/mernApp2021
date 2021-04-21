import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid, Message } from 'semantic-ui-react';
import './../../index.css'
import axios from 'axios';
 

 

class App extends Component {

  state={
    name:"",
    body:"",
    nameList:[]
  }

  componentDidMount = () => {
    this.getNames()
   }
 
getNames = () => {
  axios.get('/api/user/name')
  .then((response)=>{
    this.setState({nameList:response.data})
    this.getNames()

  })
 }
 postName = () => { 
    axios.post('/api/user/name',{text:'jljl'})
   .then((response)=>{

this.setState({posts:response.data})
  })
 }
 

  render() {
    return (

      <div style={{textAlign:"center"}}>
          

         <button onClick={this.postName} type='submit'>submit</button>


{this.state.nameList.map((item,id)=>(
  <div>

<p key={id}>{item.text}</p>

    </div>
))}

      </div>
    );
  }
}

export default App
