import { onNavigate } from '../main.js';
import { verify } from '../lib/auth.js';

export const Login = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');

  buttonLogin.textContent = 'Entrar';
  buttonBack.textContent = 'Regresar';
  title.textContent = 'Inicia Sesion';

  div.className = 'divLogin';
  title.className = 'titleLogin';
  buttonLogin.className = 'buttonLogin';
  buttonBack.className = 'buttonBack';
  inputEmail.className = 'inputEmail';
  inputPass.className = 'inputPass';

  buttonLogin.addEventListener('click', () => {
    verify(inputEmail.value, inputPass.value)
      .then((userCredential) => {
        // Signed in
        onNavigate('/wall');
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error mensaje');
      });
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title, inputEmail, inputPass, buttonLogin, buttonBack);

  return div;
};
