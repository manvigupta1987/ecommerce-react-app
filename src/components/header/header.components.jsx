import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect'

//Connect is a HOC 
import {connect} from 'react-redux';

const Header = ({currentUser, hiddenCart}) => {
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
        <CartIcon/>
      </div>
      {hiddenCart ? null : <CartDropDown/> }
    </div>
  );
}
// name of this function can be anything but mapStateToProps is standard with redux codebases. 
// the value that is recived in this is the state object which is root reducer. 
// this function will be used anywhere we need property from the reducer. 

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hiddenCart: selectCartHidden(state)
// })

// when you have more than one selector to use, you can use createStructureSelector function which automatically passes the state
// in the selector. So the below function is equivalent to the above one. 
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hiddenCart: selectCartHidden
})

//connect is the high order component that takes a component as an argument and returns a component. 
export default connect(mapStateToProps)(Header);