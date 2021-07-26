import React from "react";
import "./sign-up.styles.scss";
class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <div className="signUp">
        <h2>Sign Up</h2>
      </div>
    );
  }
}

export default SignUp;
