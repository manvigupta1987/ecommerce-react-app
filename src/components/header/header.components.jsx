import React from 'react';
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {auth} from '../../firebase/firebase.utils';
//Connect is a HOC 
import {connect} from 'react-redux';

const Header = ({currentUser}) => {
  return(
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo'/>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        { currentUser ?
          <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div> 
          : 
          <Link className='option' to='/signin'>SIGN IN</Link>
        }
        
      </div>
    </div>
  );
}
// name of this function can be anything but mapStateToProps is standard with redux codebases. 
// the value that is recived in this is the state object which is root reducer. 
// this function will be used anywhere we need property from the reducer. 
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

//connect is the high order component that takes a component as an argument and returns a component. 
export default connect(mapStateToProps)(Header);