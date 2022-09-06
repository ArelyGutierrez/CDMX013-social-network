/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { Welcome } from './components/Welcome.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { Wall } from './components/Wall.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAnla5kpXoEqW7d_8Gwz6uN88X3BRt9eyo',
  authDomain: 'rs8-mex013.firebaseapp.com',
  projectId: 'rs8-mex013',
  storageBucket: 'rs8-mex013.appspot.com',
  messagingSenderId: '135526182433',
  appId: '1:135526182433:web:0f81b946afd3e6a8917d60',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = document.getElementById('root');

const routes = {
  '/': Welcome,
  '/login': Login,
  '/register': Register,
  '/wall': Wall,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};

root.appendChild(component());
