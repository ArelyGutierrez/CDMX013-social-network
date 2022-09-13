import { reject } from 'lodash';

// autenticación
const getAuth = (auth, email, password) => {
    
}



/* const getAuth = (auth, email, password) => {
   return { newUser: (email, password) => {
        return new Promise((resolve, reject) => {
      resolve(onNavigate('/login'));
      reject('Llena los campos requeridos');
    })
  }
  }; */

const auth = {
  getAuth: getAuth(),
};
