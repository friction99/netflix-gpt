import { useState,useRef} from "react"
import { validate } from "../utils/validation";
import {auth} from "../utils/firebase"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import Header from "./Header"
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR } from "../utils/constants";
const Login = () => {
  const [currState,setCurrState] = useState(true);
  const [message,setMessage] = useState("");
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handler = ()=>{
    setCurrState(!currState);
  };
  const handleClick = ()=>{
    const message = validate(email.current.value,password.current.value);
    setMessage(message);
    if(message) return;
    if(!currState){
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        //account is created(signup logic)
        const user = userCredential.user;
        updateProfile(user, {
        displayName: name.current.value, photoURL: AVATAR
        }).then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid,emal:email,displayName:displayName,photoURL:photoURL}));
        }).catch((error) => {
           setMessage(error);
           dispatch(removeUser());
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorCode+errorMessage);
      });
    }else{
    //sign in logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => { 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorCode+errorMessage);
      });
    }
  }
  return(
        <div>
          <Header/>
          <div
          className="absolute w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg')` }}>
          </div>
          <form onSubmit={(e)=>{e.preventDefault()}} className="absolute p-12 bg-black bg-opacity-80 rounded-md w-3/12 my-36 mx-auto left-0 right-0 text-white">
                <h1 className="font-bold p-4 text-3xl">{(currState)?"Sign In":"Sign Up"}</h1>
                {(!currState)?<input ref={name} type="text" className="p-4 m-4 w-11/12 bg-gray-600" placeholder="Name"></input>:""}
                <input ref={email} type="text" className="p-4 m-4 w-11/12 bg-gray-600" placeholder="Email"></input>
                <input ref={password} type="password" className="p-4  m-4 w-11/12 bg-gray-600" placeholder="Password"></input>
                <button onClick={handleClick}className="p-4 m-4 w-11/12 bg-red-600 rounded-sm">{(currState)?"Sign In":"Sign Up"}</button>
                <p className="p-2 mx-4 my-1 font-bold text-red-600">{message}</p>
                <p className="p-2 mx-4 my-1 cursor-pointer" onClick={handler}>{(currState)?"New to Netflix? Sign Up!!!":"Create An account and sign in"}</p>
          </form>
        </div>
    )
}

export default Login