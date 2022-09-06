import { onNavigate } from '../main.js';

export const Login = () => {
  const div = document.createElement('div');
  const titleLogin = document.createElement('h2');
  const buttonEmail = document.createElement('button');
  const buttonPass = document.createElement('button');
  const buttonGithub = document.createElement('button');
  const buttonLoginStart = document.createElement('button');
  const paragraphLogin = document.createElement('p');
  const inputMail = document.createElement('input');
  const inputPasw = document.createElement('input');
  const paragraphReg = document.createElement('p');
  const buttonRegisterReturn = document.createElement('href');

  titleLogin.textContent = 'Iniciar Sesión';
  buttonEmail.textContent = 'Iniciar Sesión con Google';
  buttonPass.textContent = 'Iniciar Sesión con Twitter';
  buttonGithub.textContent = 'Iniciar Sesión con GitHub';
  buttonLoginStart.textContent = 'Iniciar sesión';
  paragraphLogin.textContent = '____________o____________';
  inputMail.textContent = 'Email';
  inputPasw.textContent = 'Password';
  paragraphReg.textContent = '¿No tienes una cuenta?';
  buttonRegisterReturn.textContent = 'Registrate';

  div.className = 'divWelcome';
  titleLogin.className = 'titleLogin';
  buttonLoginStart.className = 'buttonLogin';
  buttonEmail.className = 'buttonEmail';
  buttonPass.className = 'buttonPass';
  buttonGithub.className = 'buttonGithub';
  buttonLoginStart.className = 'buttonLogin';
  paragraphLogin.className = 'paragraphLogin';
  inputMail.className = 'inputMail';
  inputPasw.className = 'inputPasw';
  paragraphReg.className = 'paragraphReg';
  buttonRegisterReturn.className = 'buttonRegisterReturn';

  buttonLoginStart.addEventListener('click', () => {
    console.log(buttonEmail.value);
    onNavigate('/wall');
  });
  buttonRegisterReturn.addEventListener('click', () => {
    onNavigate('/register');
  });

  div.append(titleLogin, buttonEmail, buttonPass, buttonGithub, paragraphLogin, inputMail, inputPasw, buttonLoginStart, paragraphReg, buttonRegisterReturn);

  return div;
};
