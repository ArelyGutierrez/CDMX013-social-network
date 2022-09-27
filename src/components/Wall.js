import { serverTimestamp} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { onNavigate } from '../main.js';
import { savePosts, onGetPosts } from '../lib/store.js';
import { auth } from '../lib/auth.js';

export const Wall = () => {
  const div = document.createElement('div');
  const containerBack = document.createElement('div');
  const buttonBack = document.createElement('img');
  const headerWall = document.createElement('img');
  const containerContent = document.createElement('div');
  const greeting = document.createElement('h2');
  const questionPost = document.createElement('p');
  const divNewPost = document.createElement('div');
  const inputPost = document.createElement('textarea');
  const buttonPost = document.createElement('img'); // const buttonPost = document.createElement('button');
  const errorMessagePost = document.createElement('div'); // error messages
  const containerNewsWall = document.createElement('div');
  const newsWallTitle = document.createElement('h2');
  const noNewsWall = document.createElement('p');

  buttonBack.src = './images/arrowBack.png'; //  buttonBack.textContent = '<';
  headerWall.src = './images/gorro.png'; // headerWall.src = './images/logochef.jpg';
  greeting.textContent = 'Hola, Usuari@ 🖐🙋‍♀️';
  questionPost.textContent = '¿Quieres compartir algo?';
  inputPost.placeholder ='Escribe aquí...';
  buttonPost.src = './images/send1.png';
  errorMessagePost.textContent = ''; // si hay error lo despliega aquí
  newsWallTitle.textContent = 'Novedades';
  noNewsWall.textContent = 'No hay novedades por el momento';
  containerBack.className = 'containerBack';
  containerContent.className = 'divCenterW';
  containerNewsWall.className = 'divCenterW';
  buttonBack.className = 'buttonBack';
  headerWall.className = 'headerWall';
  greeting.className = 'titlePost';
  questionPost.className = 'paragraphWall';
  inputPost.className = 'inputPost';
  buttonPost.className = 'buttonPost';
  errorMessagePost.className = 'errorMessagesR';
  newsWallTitle.className = 'titlePost';
  noNewsWall.className = 'paragraphNoNewsWall';

  buttonBack.addEventListener('click', () => {
    onNavigate('/login');
  });
  headerWall.addEventListener('click', () => {
    onNavigate('/');
  });

  buttonPost.addEventListener('click', () => {
    const data = {
      text: inputPost.value,
      email: auth.currentsUser.email,
      createdAt: serverTimestamp(),
    }; console.log(data);
    savePosts(data);
  });

  //Mostrar publicaciones en muro

  onGetPosts ((callback)=> {
    while (noNewsWall.firstChild){
      noNewsWall.removeChild(noNewsWall.firstchild);
    }
    callback.forEach((doc) => {
      const post = doc.data();
      const sectionAll = document.createElement('section');
      const textPost = document.createElement('p');
      textPosts.className ='textPosts';
      textPosts.textContent = post.text;
      const userTitle = document.createElement ('h4');
      userTitle.className = 'userTitle';
      userTitle.textContent = post.email;
      const iconDelete = document.createElement('img');
      iconDelete.className = 'iconDelete';
      iconDelete.src = './images/iconBin.png';
      sectionAll.append(userTitle, textPost, iconDelete);
      noNewsWall.append(sectionAll);
    });
  });

  containerBack.append(buttonBack, headerWall);
  divNewPost.append(inputPost, buttonPost, labelTitle);
  containerContent.append(greeting, questionPost, divNewPost, errorMessagePost);
  containerNewsWall.append(newsWallTitle, noNewsWall);
  div.append(containerBack, containerContent, containerNewsWall);

  return div;
};
