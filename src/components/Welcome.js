import { onNavigate } from '../main.js';

export const Welcome = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const paragraphWelcome = document.createElement('p');
  const buttonRegister = document.createElement('href');

  buttonLogin.textContent = 'Inicia Sesión';
  paragraphWelcome.textContent = '¿No tienes cuenta?';
  buttonRegister.textContent = 'Registrate';
  title.textContent = 'Feel the magic of simply';

  div.className = 'divWelcome';
  title.className = 'titleWelcome';
  buttonLogin.className = 'buttonLogin';
  paragraphWelcome.className = 'paragraphWelcome';
  buttonRegister.className = 'buttonRegister';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  div.append(title, buttonLogin, paragraphWelcome, buttonRegister);

  return div;
};
