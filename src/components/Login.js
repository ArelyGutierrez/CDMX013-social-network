import { onNavigate } from '../main.js';
import { verify } from '../lib/auth.js';

export const Login = () => {
  const divdos = document.createElement('div');
  const div = document.createElement('div');
  const tittleLogin = document.createElement('h2');
  const buttonEmail = document.createElement('button');
  const buttonPass = document.createElement('button');
  const buttonGithub = document.createElement('button');
  const buttonLoginStart = document.createElement('button');
  const paragraphLogin = document.createElement('p');
  const inputMail = document.createElement('input');
  const inputPasw = document.createElement('input');
  const paragraphReg = document.createElement('p');
  const buttonRegisterReturn = document.createElement('href');

  tittleLogin.textContent = 'Iniciar Sesión';
  buttonEmail.textContent = 'Iniciar Sesión con Google';
  buttonPass.textContent = 'Iniciar Sesión con Twitter';
  buttonGithub.textContent = 'Iniciar Sesión con GitHub';
  buttonLoginStart.textContent = 'Iniciar sesión';
  paragraphLogin.textContent = '____________o____________';
  inputMail.placeholder = 'Email';
  inputPasw.placeholder = 'Password';
  paragraphReg.textContent = '¿No tienes una cuenta?';
  buttonRegisterReturn.textContent = 'Registrate';

  divdos.className = 'divLogin';
  div.className = 'divWelcome';
  tittleLogin.className = 'tittleLogin';
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
    verify(inputMail.value, inputPasw.value)
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
  console.log(buttonEmail.value);
  buttonRegisterReturn.addEventListener('click', () => {
    onNavigate('/register');
  });

  div.append(tittleLogin, buttonEmail, buttonPass, buttonGithub, paragraphLogin, inputMail, inputPasw, buttonLoginStart, paragraphReg, buttonRegisterReturn);

  return div;
};
