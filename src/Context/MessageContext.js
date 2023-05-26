/*
    Account : AnhNT282
    Description : Context saves message list
    Date created : 2023/05/23
*/

import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase/config';
import axios from 'axios';

export const MessageContext = React.createContext();

export default function MessageProvider({ children }) {
  const [listMessage, setListMessage] = useState([]);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = async () => {
      var token = sessionStorage.getItem('token');
      if(token) {
        var res = await axios.get("https://localhost:7113/api/my", { headers: { "Authorization": `Bearer ${sessionStorage.getItem('token')}` } })
        setCurrentUser(res?.data?.data);
      }
    };
    return () => unsubscribe();
  },[])



  useEffect(() => {
    if(currentUser) {
      const senderId = currentUser.id;
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
    }
  }, [currentUser]);


  return (
    <MessageContext.Provider
      value={{
        listMessage, currentUser
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}
