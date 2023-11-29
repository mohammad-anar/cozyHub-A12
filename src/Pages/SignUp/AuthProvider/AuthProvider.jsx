import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../../firebase/firebase.conf";

// constex api
export const AuthContex = createContext(null);
const googleProvider = new GoogleAuthProvider();
// const gitHubPorvider = new GithubAuthProvider();
// Main FN
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  //  create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  signin user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //  signin user
  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: photo
    });
  };
  //google signin
  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  
  
  // log out
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  //get/set user
  useEffect(() => {
    const unSubscrive = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unSubscrive();
    };
  }, []);

  const authValue = {
    user,
    loading,
    createUser,
    signInUser,
    googleSignin,
    updateUser,
    logout,
  };
  return (
    <AuthContex.Provider value={authValue}>{children}</AuthContex.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
