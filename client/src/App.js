import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {GlobalStyle} from './global.styles'
// import Homepage from "./pages/homepage/homepage.component";
// import ShopPage from "./pages/shoppage/shop.component";
// import CheckoutPage from "./pages/checkout/checkout.component";
// import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components";
// import Contact from "./pages/contactpage/contact.components";
import Header from "./components/header/header.component";
import Spiner from './components/spinner/spiner'

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSesion } from "./redux/user/user.action";
import { createStructuredSelector } from "reselect";
import ErrorBoundary from './components/error-boundary/error-boundary'

const HomePage = lazy(() => import("./pages/homepage/homepage.component"))
const ShopPage = lazy(() => import("./pages/shoppage/shop.component"))
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"))
const Contact = lazy(() => import("./pages/contactpage/contact.components"))
const SignInAndSignUpPage = lazy(() => import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.components"))

const App = ({ checkUserSesion, currentUser }) => {
  useEffect(() => {
    checkUserSesion();
  }, [checkUserSesion]);

  return (
    <div>
      <GlobalStyle/>
      <Header />
      <Switch>
        <ErrorBoundary>
        <Suspense fallback={<Spiner/>}>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/contact" component={Contact} />

        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
          />
          </Suspense>
          </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSesion: () => dispatch(checkUserSesion()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
