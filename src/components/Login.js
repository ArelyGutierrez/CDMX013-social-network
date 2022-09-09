import { onNavigate } from '../main.js';
import { verify } from '../lib/auth.js';

export const Login = () => {
  const divdos = document.createElement('div');
  const div = document.createElement('div');
  const containerContentL = document.createElement('div');
  const headerLogin = document.createElement('p');
  const tittleLogin = document.createElement('h2');
  const buttonGoogle = document.createElement('button');
  const buttonTwitter = document.createElement('button');
  const buttonGithub = document.createElement('button');
  const buttonLoginStart = document.createElement('button');
  const paragraphLogin = document.createElement('p');
  const inputMail = document.createElement('input');
  const inputPasw = document.createElement('input');
  const paragraphReg = document.createElement('p');
  const buttonRegisterReturn = document.createElement('href');
  const divtres = document.createElement('div');

  tittleLogin.textContent = 'Iniciar Sesión';
  buttonGoogle.textContent = 'Iniciar Sesión con Google';
  buttonTwitter.textContent = 'Iniciar Sesión con Twitter';
  buttonGithub.textContent = 'Iniciar Sesión con GitHub';
  paragraphLogin.textContent = '__________________o__________________';
  inputMail.placeholder = 'Correo electrónico';
  inputPasw.placeholder = 'Contraseña';
  buttonLoginStart.textContent = 'Iniciar sesión';
  paragraphReg.textContent = '¿No tienes una cuenta?';
  buttonRegisterReturn.textContent = 'Registrate';

  divdos.className = 'divLogin';
  div.className = 'divCenter';
  tittleLogin.className = 'tittleLogin';
  buttonGoogle.className = 'buttonGoogle';
  buttonTwitter.className = 'buttonTwitter';
  buttonGithub.className = 'buttonGithub';
  paragraphLogin.className = 'paragraphLogin';
  inputMail.className = 'inputMail';
  inputPasw.className = 'inputPasw';
  buttonLoginStart.className = 'buttonLogin';
  divtres.className = 'errorMessagesR';
  paragraphReg.className = 'paragraphReg';
  buttonRegisterReturn.className = 'buttonRegisterReturn';

  inputPasw.type = 'password';

  buttonLoginStart.addEventListener('click', () => {
    verify(inputMail.value, inputPasw.value)
      .then((userCredential) => {
        // Signed in
        onNavigate('/wall');
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        if (inputMail.value === '' || inputPasw.value === '') {
          divtres.innerHTML = 'Llena los campos requeridos';
        } else if (error.code === 'auth/wrong-password') {
          divtres.innerHTML = 'Correo electrónico y/o contraseña incorrecta';
        } else if (error.code === 'auth/invalid-email') {
          divtres.innerHTML = 'Correo electrónico y/o contraseña incorrecta';
        }
      });
  });
  buttonRegisterReturn.addEventListener('click', () => {
    onNavigate('/register');
  });

  paragraphReg.append(buttonRegisterReturn);
  div.append(tittleLogin, buttonGoogle, buttonTwitter, buttonGithub, paragraphLogin, inputMail, inputPasw, divtres, buttonLoginStart, paragraphReg);

  return div;
};
