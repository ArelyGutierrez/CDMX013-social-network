// Este es el punto de entrada de tu aplicacion //logica con todo lo que se imprime en pantalla
import { Welcome } from './components/Welcome.js';
// eslint-disable-next-line import/no-cycle
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';

const root = document.getElementById('root'); // variable que acceda a ese nodo que hemos creado
const routes = {
  '/': Welcome,
  '/login': Login,
  '/register': Register,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild); // borra lo anterior
  root.appendChild(routes[pathname]());// linea que inserta lo nuevo
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild); // borra lo anterior
  root.append(component());
};

root.appendChild(component());
