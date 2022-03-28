import React, { Component } from 'react'
export default class Person extends Component {
    constructor(props){
        super(props)
        this.state={
          counter:0,
          intervall:null
        }

    }
    componentDidMount(){
      this.setState({
        intervall : setInterval(()=>{
          this.setState({
            counter:this.state.counter+1
          })
        },1000)
      })
    }
    componentWillUnmount(){
      this.clearIntervall(this.state.intervall)
    }
  render() {
      const { fullName,bio, src, profession ,}=this.props

    return (
      <div>
          <h1></h1>
          <h1>{fullName}</h1>
          <h2> {bio}</h2>
          <img src ={src} alt ="logo" width="400"/>
      </div>
    )
  }
}
