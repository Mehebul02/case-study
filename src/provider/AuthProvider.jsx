import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase_config";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Sign in
  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign out
  const userSignOut = async () => {
    setLoading(true);

    const { data } = await axios(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true,
    });

    return signOut(auth);
  };
  // google login
  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // github login
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // update profile
  const userUpdateProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current user..", currentUser);
      setLoading(false);
      const { data } = axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        {
          email: currentUser?.user?.email,
        },
        { withCredentials: true }
      );
      console.log(data);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     // const userEmail = currentUser?.email || user?.email;
  //     // const loggedUser = { email: userEmail };
  //     setLoading(false);
  //     setUser(currentUser);
  //     console.log("Tui sob somoy thakbi");

  //     // if (createUser) {
  //     //   axios
  //     //     .post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, {
  //     //       withCredentials: true,
  //     //     })
  //     //     .then((data) => {
  //     //       console.log("Token response", data.data);
  //     //     });
  //     // } else {
  //     //   axios(`${import.meta.env.VITE_API_URL}/logout`, loggedUser,{
  //     //     withCredentials: true,
  //     //   }).then((data) => {
  //     //     console.log(data.data);
  //     //   });
  //     // }
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    userSignIn,
    userSignOut,
    signInGoogle,
    githubLogin,
    userUpdateProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
