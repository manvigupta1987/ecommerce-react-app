import React, {useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../formInput/formInput.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

const SignIn = () => {

  const [userCredentials, setUserCredentials] = useState({email: '', password: ''})
  const {email, password} = userCredentials

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({email:'', password: ''})
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const{value, name} = e.target;
    setUserCredentials({...userCredentials, [name]: value})
  }
  
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput handleChange={handleChange} name='email' type="email" value={email} label='Email' required />
        <FormInput handleChange={handleChange} name='password' type="password" value={password} label='Password' required />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
        </div>
      </form>
    </div>
  );
  
}
// class SignIn extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       email: '',
//       password: ''
//     }
//   }

//   handleSubmit = async e => {
//     e.preventDefault()
//     const {email, password} = this.state;
//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//       this.setState({
//         email: '',
//         password: ''
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   handleChange = (e) => {
//     const{value, name} = e.target;
//     this.setState({[name]: value})
//   }

//   render() {
//     return(
//       <div className='sign-in'>
//         <h2>I already have an account</h2>
//         <span>Sign in with your email and password</span>
//         <form onSubmit={this.handleSubmit}>
//           <FormInput handleChange={this.handleChange} name='email' type="email" value={this.state.email} label='Email' required />
//           <FormInput handleChange={this.handleChange} name='password' type="password" value={this.state.password} label='Password' required />
//           <div className='buttons'>
//             <CustomButton type='submit'>Sign In</CustomButton>
//             <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SignIn;

