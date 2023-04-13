import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB4kVXm6i4CKl4GG6qDcTvItGU8mNoH0SQ",
  authDomain: "learnweb-b6104.firebaseapp.com",
  projectId: "learnweb-b6104",
  storageBucket: "learnweb-b6104.appspot.com",
  messagingSenderId: "211656505740",
  appId: "1:211656505740:web:41ffc897741435a26efea9",
  measurementId: "G-9VFMLFLZ6L"
};
const app = initializeApp(firebaseConfig); // khởi tạo firebase
export const db = getFirestore(app); // lấy dữ liệu ra realtime
export const auth = getAuth(app);
