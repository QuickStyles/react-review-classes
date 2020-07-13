import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import {Session} from '../requests'

export default class SessionCreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginData: {
        email: '',
        password: ''
      },
      errors: ''
    }
  }

  handleLogin = () => {
    const userData = this.state.loginData
    console.log(userData)
    Session.create(userData)
    .then((res) =>{console.log(res)} )
  }

  updateLoginData = (updatedLoginData) => {
    // updatedLoginData should look like {email: '...', password: '...'}
    if (updatedLoginData.email && updatedLoginData.email.length < 4) {
      this.setState((state) => {
        return {
          errors: 'Email can not be less than 6 characters'
        }
      })
    } else {
      this.setState((state) => {
        return {
          errors: ''
        }
      })
    }
    this.setState((state) => {
      return {
        loginData: {
          ...state.loginData,
          ...updatedLoginData
        }
      }
    })
  } 

  render() {
    return(
      <main>
        <h1>Login</h1>
        <div style={{color: 'red'}}>{this.state.errors}</div>
        <LoginForm loginData={this.state.loginData} updateLoginData={this.updateLoginData} handleLogin={this.handleLogin} />
      </main>
    )
  }
}
