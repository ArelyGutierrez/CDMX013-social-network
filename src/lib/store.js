// eslint-disable-next-line import/no-unresolved
import {
  getFirestore, collection, addDoc, getDocs, onSnapshot,
  // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { app } from './config.js';

// Inicializamos Firestore
const db = getFirestore(app);
const dbRef = collection(db, 'post');

export const posts = (data) => addDoc(dbRef, data)
  .then((docRef) => {
    console.log('Document has been added successfully');
  })
  .catch((error) => {
    console.log(error);
  });

// real time collection data
// getDocs(dbRef)
//   .then((snapshot) => {
//     let novedades = [];
//     snapshot.docs.forEach((doc) => {
//       novedades.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(novedades);
//   });
//   .catch(err => {
//     console.log(err.message)
//   });
export const newPosts = () => {
  onSnapshot(dbRef, (snapshot) => {
    let novedades = [];
    snapshot.forEach((doc) => {
      novedades.push({ ...doc.data(), id: doc.id }); // id: doc.id
    });
    console.log(novedades);
  });
};
newPosts();

// obtener post
// export const getPost = () => dbRef.get();
//   const querySnapshot = await getDocs(collection(db, 'post'))
//   querySnapshot.forEach((doc) => {
//     console.log(doc.data());
//   });
// }
