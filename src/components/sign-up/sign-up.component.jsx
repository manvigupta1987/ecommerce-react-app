import React from 'react';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';
class SignUp extends React.Component {

  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    const {displayName, email, password, confirmPassword} = this.state;
    if(password !== confirmPassword) { 
      alert("passwords don't match")
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName})
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (e) => {
    const{value, name} = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return(
      <div className='sign-up'>
        <h2 className='title'> I dont have a account</h2>
        <span> Sign up with your email and password</span>
        <form className= 'sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput handleChange={this.handleChange} name='displayName' type="text" value={displayName} label='Display Name' required />
          <FormInput handleChange={this.handleChange} name='email' type="email" value={email} label='Email' required />
          <FormInput handleChange={this.handleChange} name='password' type="password" value={password} label='Password' required />
          <FormInput handleChange={this.handleChange} name='confirmPassword' type="password" value={confirmPassword} label='Confirm Password' required />
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
