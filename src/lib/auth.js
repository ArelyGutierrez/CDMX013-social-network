/* eslint-disable import/no-unresolved */
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, GithubAuthProvider, signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from './config.js';

const auth = getAuth();
export const newUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const verify = (email, password) => signInWithEmailAndPassword(auth, email, password);

// Autenticación de Google
const provider = new GoogleAuthProvider();
export const verifyG = () => signInWithRedirect(auth, provider);

// Autenticación con GitHub
// const providerGitHub = new firebase.auth.GithubAuthProvider(); // creando instancia del objeto del proveedor de GitHub
// export const verifyGitHub = () => firebase.auth().signInWithPopup(auth, providerGitHub);
