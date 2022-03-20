import LoginForm from "../src/components/login"
import SignUpFrom from "../src/components/signup"
import Home from "../src/components/home"
import { firebaseAuth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

function App() {
  // set the current auth state of the user ex. signup, login or home
  const [authState, setAuthState] = useState('login');

  //auth handler that changes the auth state ex. from signup to login
  function authHanlder(state){
    setAuthState(state)
  }

  function currentlyShowing(){
    switch(authState){
      case "login":
        return <LoginForm handler={authHanlder}/>
      case "signup":
        return <SignUpFrom handler={authHanlder}/>
      case "home":
        return <Home/>
      default:
        return  <LoginForm handler={authHanlder}/>
    }
  }

  useEffect(()=>{
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setAuthState("home");
        // ...
      } else {
        // User is signed out
        // ...
        setAuthState("login");
      }
    })
    

  },[]);

  return (
    <>
    {currentlyShowing()}
    </>
  );
}

export default App;
