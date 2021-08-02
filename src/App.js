import React from "react";
import HomePage from "./pages/homepage/Homepage.component";
import Shop from "./pages/shop/shop.component.jsx";
import Contact from "./pages/contact/contact.component.jsx";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import Header from "./components/header/header.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <main>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </main>
    );
  }
}

export default App;
