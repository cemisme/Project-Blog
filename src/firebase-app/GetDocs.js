import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase-config";
const colRef = collection(db, "user infor");


const GetDocs = () => {
  const [data, setData]=useState([])
  useEffect(() => {
    let data = [];
    onSnapshot(colRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    });
    setData(data);
  }, []);
  return data;
};

export default GetDocs;
