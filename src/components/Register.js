import { onNavigate } from '../main.js';
import { newUser } from '../lib/auth.js';

export const Register = () => {
  const div = document.createElement('div');
  const containerBack = document.createElement('button');
  const headerRegister = document.createElement('p');
  const title = document.createElement('h2');
  const buttonRegisterL = document.createElement('button');
  const inputUser = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonBack = document.createElement('button');
  const termsLegend = document.createElement('p');
  const cointenerQuestion = document.createElement('div');
  const paragraph2 = document.createElement('p');
  const hrefLogin = document.createElement('href');

  buttonBack.textContent = '<'; // buttonBack.src = url('./images/arrow_back.png');
  headerRegister.textContent = 'Bienvenida';
  title.textContent = 'Crea tu cuenta';
  inputUser.placeholder = 'Usuario';
  inputEmail.placeholder = 'Email';
  inputPass.placeholder = 'Contraseña';
  buttonRegisterL.textContent = 'Registrarse';
  termsLegend.textContent = 'Al dar click en Registrarse usted acepta nuestros Términos y Condiciones';
  paragraph2.textContent = '¿No tienes cuenta?';
  hrefLogin.textContent = 'Inicia sesión';

  div.className = 'divCenter';
  containerBack.className = 'cointenerBack';
  buttonBack.className = 'buttonBack';
  containerBack.className = 'containerBack';
  headerRegister.className = 'headerRegister';
  title.className = 'titleRegister';
  inputUser.className = 'inputRegister';
  inputEmail.className = 'inputRegister';
  inputPass.className = 'inputRegister';
  buttonRegisterL.className = 'buttonRegisterL';
  termsLegend.className = 'termsLegend';
  cointenerQuestion.className = 'conteinerQuestion';
  paragraph2.className = 'paragraph2';
  hrefLogin.className = 'hrefLogin';

  buttonRegisterL.addEventListener('click', () => {
    newUser(inputEmail.value, inputPass.value).then((userCredential) => {
      // Signed in
      onNavigate('/login');
      const user = userCredential.user;
      console.log(user);
      // ...
    })
      .catch((error) => {
        console.log(error);
        // ..
      });
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });
  hrefLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  containerBack.append(buttonBack, headerRegister);
  cointenerQuestion.append(paragraph2, hrefLogin);
  div.append(containerBack, title, inputUser, inputEmail, inputPass, buttonRegisterL, termsLegend, cointenerQuestion);

  return div;
};
