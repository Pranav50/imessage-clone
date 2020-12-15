import React from "react";
import "./Signin.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../config/firebase";
const Signin = () => {
  const signIn = e => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch(err => alert(err.message));
  };
  return (
    <div className="signin">
      <div className="signin__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png"
          alt="logo"
        />
        <div className="signin__text">
          <h1>Sign in to iMessage</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign in With Google
        </Button>
      </div>
    </div>
  );
};

export default Signin;
