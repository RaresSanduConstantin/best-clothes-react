import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/swing-btn.svg";

// import {
//   HeaderContainer,
//   LogoContainer,
//   UserNameContainer,
//   OptionsContainer,
//   OptionLink,
//   OptionDiv,
// } from "./header.styles";

import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 50px;
  // padding: 25px;
`;

const UserNameContainer = styled.div`
  font-size: 20px;
  font-weight: bolder;
  width: 50%;
  height: 100%;
  padding: 10px 15px;
`;

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;
  font-weight: bolder;
`;

const Option = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <UserNameContainer>{`Hi ${
        currentUser ? currentUser.displayName : "There"
      } `}</UserNameContainer>
      <OptionsContainer>
        <Option to="/shop">Shop</Option>
        <Option to="/contact">Contact</Option>

        {currentUser ? (
          <Option as="div" onClick={() => auth.signOut()}>
            Sign Out
          </Option>
        ) : (
          <Option to="/signin">Sign In</Option>
        )}

        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
