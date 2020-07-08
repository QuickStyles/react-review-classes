import React, { Component } from 'react'
import { User } from '../requests'

class NewUserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: {}
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event
    // const { username, email, password,  } =currentTarget
    const formData = new FormData(currentTarget)
    const userData = {
      user: {
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation')
      }
    }
    User.create(userData).then(payload => console.log(payload));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input type='text' name="username" id='username' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' id='email' />
        </div>
        <div>
          <label htmlFor='password'/>Password<label/>

          <input name='password' type="password" id='password' />
        </div>
        <div>
          <label htmlFor='password_confirmation'>Confirm Password</label>
          <input name='password_confirmation' type="password" id='password_confirmation' />
        </div>
        <div>
          <input type='submit' value='submit'/>
        </div>
      </form>
    )
  }
}

export default NewUserForm