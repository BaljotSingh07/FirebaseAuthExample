import { firebaseAuth } from "../firebase";
import { signOut } from "firebase/auth";
import Button from '@mui/material/Button';

export default function Home(){

    function handleSignOut(){
        signOut(firebaseAuth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    return(
        <>
        <h1>You are signed in.</h1>
        <Button variant="contained" onClick={handleSignOut}>Sign Out</Button>
        </>
    )
}