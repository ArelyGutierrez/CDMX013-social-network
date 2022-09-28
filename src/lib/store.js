/* eslint-disable import/no-unresolved */
import {
  getFirestore, collection, addDoc, onSnapshot, query, orderBy, updateDoc, deleteDoc, doc, 
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { app } from './config.js';

// Inicializamos Firestore
const db = getFirestore(app);
const dbRef = collection(db, 'post');

export const savePosts = (data) => addDoc(dbRef, data)
  .then((docRef) => {
    console.log('Document has been added successfully');
  })
  .catch((error) => {
    console.log(error);
  });

// Data en tiempo real
const q = query(dbRef, orderBy('createdAt', 'desc'));
export const onGetPosts = (callback) => onSnapshot(q, callback);

// Borrar una publicación
export const deletePost = (id) => {
  deleteDoc(doc(db, 'post', id));
};
