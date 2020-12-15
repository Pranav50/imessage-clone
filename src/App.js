import React, { useEffect } from "react";
import Imessage from "./components/Imessage";
import { selectUser, login, logout } from "./redux/userReducer";
import { useSelector, useDispatch } from "react-redux";
import Signin from "./components/Signin";
import { auth } from "./config/firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return <div className="app">{user ? <Imessage /> : <Signin />}</div>;
}

export default App;
