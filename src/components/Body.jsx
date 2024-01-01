import Login from "./Login"
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
const Body = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,emal:email,displayName:displayName,photoURL:photoURL}));
      } else {
        dispatch(removeUser());
      }
    });
  },[]);
  return (
    <div>
        <Login/>
    </div>
  )
}

export default Body