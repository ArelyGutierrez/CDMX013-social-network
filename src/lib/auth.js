/* eslint-disable import/no-unresolved */
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from './config.js';

const auth = getAuth();
export const newUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const verify = (email, password) => signInWithEmailAndPassword(auth, email, password);

// Autenticación de Google
const provider = new GoogleAuthProvider();
export const verifyG = () => signInWithRedirect(auth, provider);
