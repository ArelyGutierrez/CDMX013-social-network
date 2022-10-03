/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import {
  getFirestore, collection, addDoc, onSnapshot, query, orderBy, updateDoc, deleteDoc, doc, getDoc,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { app } from './config.js';

// Inicializamos Firestore
const db = getFirestore(app);
const dbRef = collection(db, 'post'); // (base de datos firestore, nombre en firestoe de coleccion)

export const savePosts = (data) => addDoc(dbRef, data) // data-> texto (publicación) nuevo
  .then((docRef) => {
    // console.log('Document has been added successfully');
    // console.log(docRef);
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
// EDITAR POSTS ////////////////////////
// Obtener una unica publicación para editar
export const getPost = (id) => getDoc(doc(db, 'post', id));

// actualizando datos
export const updatePost = (id, newFields) => updateDoc(doc(db, 'post', id), newFields);
