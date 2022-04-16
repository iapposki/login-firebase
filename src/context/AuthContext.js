import React, { useContext, useState, useEffect} from "react"
import { auth, authApp } from "../firebase"



// createContext initializes an empty database
const AuthContext = React.createContext()

// any function starting with use becomes a hook in react.
// this returns the context, whoever wants to get the new data.
export function useAuth() {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(authApp, email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(authApp, email, password)
  }

  function logout() {
    return auth.signOut(authApp)
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(authApp, email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    return auth.onAuthStateChanged(authApp, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;

