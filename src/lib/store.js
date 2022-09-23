// eslint-disable-next-line import/no-unresolved
import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, query, where, orderBy,
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

//queries
const q = query(dbRef, orderBy('createdAt', 'desc'));

export const onGetPost = (callback) => onSnapshot (q, callback);


/*export const newPosts = () => {
  onSnapshot(q, (snapshot) => { // onSnapshot(dbRef, (snapshot) => {
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
  