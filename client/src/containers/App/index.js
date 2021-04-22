import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid, Message } from 'semantic-ui-react';
import './../../index.css'
import axios from 'axios';
import ImageUploader from 'react-images-upload';


class App extends Component {

  state={
    name:"",
    body:"",
    nameList:[],
    pictures:[],
    file:"",
    fileName:"",
    uploadedFile:{},
    myImages:[],
  }

  

componentDidMount = () => {
    this.getMyImage()
    this.getNames()

 }

getMyImage = () => {
    axios.get('/api/user/myimages')
    .then((response)=>{
        this.setState({myImages:response.data})
     })
}

handleRequest = (event) => {
    event.preventDefault()
    const data = new FormData();
    const {file} = this.state
    data.append('file', file)

    axios.post('/api/user/myimages',data)
    .then((response)=>{
        this.setState({uploadedFile:response.data})
        console.log(response.data,'uploadedfile')
        this.getMyImage()
     })
       
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

<div style={{margin:'70px 0 0 0'}}>


  
 <input onChange={(event)=>{
 const file = event.target.files[0]
 this.setState({file:file})
 }}
 type='file'>
 </input>

           

 <button className='axiosRequestImages' onClick={this.handleRequest}> add a picture</button>
 
 {this.state.myImages.map((item)=>(
    <div>
         <img 
        style={{width:'200px',
        height:'200px',
        float:'left',margin:"20px",
        borderRadius:'9px', backgroundColor:'white'}}
        src={item.filePath}
        />
     </div>
 ))
 }
 

</div>

      </div>
    );
  }
}

export default App
