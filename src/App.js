import './App.css';
import React, { Component } from 'react'
import Person from './Components/Person';
import Image from './Components/Image.jpg'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      show :true
    }
  }
  handleClick=()=>{
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div style={{ textAlign:'center', fontSize:'30px' ,fontFamily:'cursive' ,color:'#094679' ,background: 'rgb(63,94,251)',
      background:'radial-gradient(circle,rgba(63,94,251,1) 0% ,rgba(241,220,225,1) 100%)'}}>
        <button style={{maxWidth:'100px',height:'50px',marginBottom:'40px', backgroundColor:'#094679'}} onClick={this.handleClick}>Click Mee !</button>
           {
             this.state.show ? ( <Person
              fullName="Dabboussi Amal"
              bio=" Actuellement étudiante en 3éme année à ISLAIB"
              profesion=" futur développeur web "
               src={Image} /> 
               ): null
           }
       
        
      </div>
    )
  }
}

