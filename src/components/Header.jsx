import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const user = useSelector((store)=>store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,emal:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>unsubscribe;
  },[]);
  const handleClick = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
    });
    }
  return (
    <div className="w-screen p-2 bg-gradient-to-b from-black z-10 flex justify-between absolute">
        <div>
          <img className="w-48" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix-logo" />
        </div>
        {user && (
          <div className="flex justify-center items-center">
          <img className="w-12 mx-2" src={user?.photoURL} alt="userLogo"/>
          <button className="cursor-pointer bg-red-600 rounded-md p-2" onClick={handleClick}>
            Sign Out
          </button>
       </div>
        )}
    </div>
  )
}

export default Header