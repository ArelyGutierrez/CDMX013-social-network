/* // importamos la funcion que vamos a testear
import { newUser, verify } from '../src/lib/auth.js';
import { app } from '../src/lib/config.js';

/* describe('Error Messages in Login', () => {
  it.only('Error message of empty fields', () => {
    const email = '';
    const password = '';
    expect(verify(email, password)).toEqual('Llena los campos requeridos');
  });
}); */
import { newUser, verify } from '../src/lib/auth.js';
// import { Register } from '../src/components/Register.js';

jest.mock('../src/lib/auth.js');

describe('register', () => {
  it('iniciar sesion con correo : algo@algo.algo y contraseña: abc123', () => {
    const email = '';
    const password = '';
    return newUser(email, password).then((user) => {
      expect(user.email === 'algo@algo.algo').toBe(true);
      expect(user.password === 'abc123').toBe(true);
    });
  });
});
