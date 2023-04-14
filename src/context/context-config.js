import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase-app/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
const { createContext, useContext, useState, useEffect } = require("react");

const AuthContext = createContext();
function AuthProvider(props) {
  const colRef = collection(db, "user infor");
  const [userInfo, setUserInfo] = useState({});
  const [posts, setPosts] = useState([]);
  const userName = posts.map((item) => {
    if (item.Email === userInfo.email) {
      return item.Fullname;
    }
  });
  const value = { userName, userInfo, setUserInfo };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
    });
    onSnapshot(colRef, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(posts);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}
function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
}
export { AuthProvider, useAuth };
