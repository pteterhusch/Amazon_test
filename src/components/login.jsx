import React, {Component} from "react";
class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            userName: "",
        }
    }
    handleChangeUser=(e)=>{
      this.setState({userName:e.target.value})
    }
    handleChangePassword=(e)=>{
        this.setState({password:e.target.value})
      }

    render(){
        console.log(this.state)
        console.log(this.props)
        return(
            <div>
                <div>
                    <input onChange ={this.handleChangeUser}  placeholder = "enter username"/> 
                </div>
                <div>
                    <input onChange ={this.handleChangePassword}  placeholder = "enter password"/>
                </div>
                <button onClick = {this.props.params.login}>
          log in
        </button>

            </div>
        )
    }
    
}

export default Login