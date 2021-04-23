import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

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
import { signOutStart } from "../../redux/user/user.action";

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
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
  @media screen and (max-width: 800px) {
    font-size: 16px;
  width: 20%;
    
  }
`;

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;
  font-weight: bolder;
  @media screen and (max-width: 800px) {
    font-size: 16px;
    width: 80% !important;
  }
`;

const Option = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

const Header = ({ currentUser, hidden, signOutStart }) => {
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
          <Option as="div" onClick={signOutStart}>
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

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
