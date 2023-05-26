/*
    Account : AnhNT282
    Description : Context saves message list
    Date created : 2023/05/23
*/

import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase/config';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

export const MessageContext = React.createContext();

export default function MessageProvider({ children }) {
  const [listMessage, setListMessage] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  useEffect( async ()=> {
    var infoUser = await axios.get("https://localhost:7113/api/my", { headers: { "Authorization": `Bearer ${sessionStorage.getItem('token')}` } });
    setCurrentUser(infoUser?.data?.data);
  }, [])


  useEffect(() => {
    const senderId = '2';
    const receiverId = 'admin';
    const userAdminRef = firestore.collection('messages').where('senderId', 'in', [senderId, receiverId])
    .where('receiverId', 'in', [senderId, receiverId]).orderBy('createAt','asc');

    // Listen to change in the message list AnhNT282
    const unsubscribe = userAdminRef.onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        const messageData = doc.data();
        data.push(messageData);
      });
      setListMessage(data);
    });

    // Cancel listening when component unmount AnhNT282
    return () => unsubscribe();
  }, []);


  return (
    <MessageContext.Provider
      value={{
        listMessage
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}
