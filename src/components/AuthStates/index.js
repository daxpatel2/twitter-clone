import UserBar from "../UserBar";
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase'
import { collection, onSnapshot, query, where } from 'firebase/firestore';

const AuthStateObserver = () => {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [tag, setTag] = useState("");


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);

      if (user) {
        // User is logged in, now query Firestore to find the document with the matching uid
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("uid","==",user.uid.toString()))
        onSnapshot(q, (snapshot) => {
            let books = []
            snapshot.docs.forEach((doc) => {
                books.push({ ...doc.data(), id: doc.id})
            })
            setBooks(books[0]);
            setName(books[0].name)
            setImg(books[0].image)
            setTag(books[0].userTag)
        })
      }
    });

    return () => unsubscribe();
  }, []);

  const uid = user?.uid;

  return (
    <div>
      {user ? ( <UserBar name={name} profileImg={img} userTag={tag} /> ) 
      : (
        alert("Please loggin to the app!")
      )}
    </div>
  );
};

export default AuthStateObserver;
