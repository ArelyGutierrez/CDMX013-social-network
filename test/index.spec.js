// importamos la funcion que vamos a testear
import { verify } from '../src/lib/auth.js';
import { app } from '../src/lib/config.js';

describe('Error Messages in Login', () => {
  it.only('Error message of empty fields', () => {
    const email = '';
    const password = '';
    expect(verify(email, password)).toEqual('Llena los campos requeridos');
  });
});
