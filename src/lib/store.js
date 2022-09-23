// eslint-disable-next-line import/no-unresolved
import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, query, where, orderBy,
  // eslint-disable-next-line import/no-unresolved
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

// queries
const q = query(dbRef, orderBy('createdAt', 'desc'));

export const onGetPosts = (callback) => onSnapshot(q, callback);
// export const newPosts = () => {
//   onSnapshot(q, (snapshot) => { // onSnapshot(dbRef, (snapshot) => {
//     const novedades = [];
//     let novedadHTML = '';
//     snapshot.forEach((doc) => {
//       const prueba = doc.data();
//       console.log(prueba.text);
//       novedadHTML += `<section id = 'novedad'>
//       <p> ${prueba.text}</p>
//       </section>`;
//       novedades.push({ prueba }); // id: doc.id
//     });
//     console.log(novedades);
//     return novedadHTML; // containerNewsWall.innerHTML = novedadHTML;
//   });
// };
