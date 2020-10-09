import React from 'react';
// import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect'
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'

//Connect is a HOC 
import {connect} from 'react-redux';

const Header = ({currentUser, hiddenCart}) => {
  return(
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo'/>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        { currentUser ?
          <OptionLink as='div' onClick={()=> auth.signOut()}>SIGN OUT</OptionLink> 
          : 
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        }
        <CartIcon/>
      </OptionsContainer>
      {hiddenCart ? null : <CartDropDown/> }
    </HeaderContainer>
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