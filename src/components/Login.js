import { onNavigate } from '../main.js';

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
    console.log(inputEmail.value);
    onNavigate('/wall');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title, inputEmail, inputPass, buttonLogin, buttonBack);

  return div;
};
