/* // importamos la funcion que vamos a testear
import { describe } from 'yargs';
import { newUser, verify } from '../src/lib/auth.js';
import { app } from '../src/lib/config.js';

/* describe('Error Messages in Login', () => {
  it.only('Error message of empty fields', () => {
    const email = '';
    const password = '';
    expect(verify(email, password)).toEqual('Llena los campos requeridos');
  });
}); */
import { Register} from '../src/components/Register.js';
import expectExport from 'expect';

describe('register', () => {
  it('iniciar sesion con correo : algo@algo.algo y contraseña: abc123'), () => {
    return newUser(email, password).then((user)=>{
      expect(user).toBe(user.email=='algo@algo.algo');
    })
  })
