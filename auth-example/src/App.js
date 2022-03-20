import LoginForm from "../src/components/login"
import SingUpFrom from "../src/components/signup"
import { firebaseAuth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

function App() {
  const [logged, setLogged] = useState(false);

  useEffect(()=>{
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setLogged(true);
        // ...
      } else {
        // User is signed out
        // ...
        setLogged(true);
      }
    })
    

  },[]);

  return (
    <LoginForm></LoginForm>
  );
}

export default App;
