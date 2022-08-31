import './styles/main.scss';
import Furios from './assets/ff.jpg';
import Close from './assets/close.png';
import {UI, getLikes, addLikes} from'./modules/api_pop.js';

const furios = new Image();
furios.src = Furios;
const close = new Image();
close.src = Close;

//-----Pop-up-------

async function renderFeatures(event){
  const api =await UI.getMovies()
  console.log(api);
  console.log(typeof event.target.id);
  console.log(api[0].image.medium);
  
  //furios.classList.add('fast');
  let apiChose = await api.filter(element =>  
    event.target.id === element.id.toString()
    ) 
    console.log(apiChose);
    
const comments = document.getElementById('comments');
close.classList.add('closeBtn');
const imgMovie = document.createElement('img')
imgMovie.classList.add('fast')
imgMovie.setAttribute('src', api[event.target.id -1].image.medium) 
const titleMovie = document.createElement('h2');
titleMovie.innerText = api[event.target.id -1].name;
const infoApi = document.createElement('h6');
infoApi.innerText = `${api[event.target.id -1].summary}`;
const oldComments = document.createElement('h3');
oldComments.innerText = 'comments(2)(API_2)';
const commentOld1 = document.createElement('ul');
const listComments = document.createElement('li');
const listComments2 = document.createElement('li');
commentOld1.appendChild(listComments,listComments2);
listComments.innerText = `03/11/2021 Alex: I'd love to buy it!`;
listComments2.innerText = `03/12/2021 Mia: I love!`;
const commentBoxes = document.createElement('form');
commentBoxes.classList.add('cm');
const addCommentTitle = document.createElement('h2');
addCommentTitle.innerText = 'Add a comment';
const nameUser = document.createElement('input');
nameUser.setAttribute('placeholder', 'Your name');
const textComment = document.createElement('input');
textComment.classList.add('insights');
textComment.setAttribute('placeholder', 'Your insights');
const sendBtn = document.createElement('button');
sendBtn.innerText = 'Send Comment';
commentBoxes.append(addCommentTitle,nameUser,textComment,sendBtn);
comments.append(close, imgMovie,titleMovie,infoApi, oldComments,commentOld1,commentBoxes );
}



//-----Likes----
document.addEventListener('click', (e) => {
 e.preventDefault();
if(e.target.matches('.like')){
  console.log(e.target.id, 'soy id');
addLikes(e.target.id)

}
});

//-----Pop-up-------

document.addEventListener('click', (e) => {
  e.preventDefault();
if(e.target.matches('.pop')){
 comments.style.visibility = 'visible';
 renderFeatures(e)  
}
});

close.addEventListener('click', (e) => {
    e.preventDefault();
    comments.style.visibility = 'hidden';
    renderFeatures().reset()
  });



//------Footer-------
const footer = document.createElement('footer');
const textFooter = document.createElement('p');
textFooter.innerText = 'Created by microverse under CC license';
footer.appendChild(textFooter);
document.lastElementChild.appendChild(footer);


UI.displayMovies();
