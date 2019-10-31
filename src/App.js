import React, {Component} from 'react';
import './App.css';
import Login from './components/login'

class App extends Component{
  constructor(){
    super()
    this.state = {
      name: "amazon",
      regUsers: [{
        name: "peter",
        active: false,
        cart: [],
        totalCartValue: 0,
        storeCredit: 0,
        purchases: [],
        password: "123"
        },

      ],
      currUser: {},
      login: this.login,
    }
  }

logIn= ()=>{
  console.log('hello')
    
    this.state.regUsers.forEach((user)=>{
      console.log(user)
        if(user.password === this.state.password && user.name === this.state.userName){
            this.setState({currUser:user})
            console.log(this.state.currUser)
            return this.state.currUser
        }
    })
}
handleChange=(e)=>{
      console.log(e)
      console.log('hello')
      console.log(e.value)
  }



  render(){
    const params = {
      login:this.logIn
    }
    return(
      <div> 
        <h1>Amazon</h1>
        <Login regUsers = {this.state.regUsers} currUser  = {this.state.currUser} params = {params}/>
      </div>
    )
  }
}

export default App;