import './styles/main.scss';
import Furios from './assets/ff.jpg';
import Close from './assets/close.png';

const furios = new Image();
furios.src = Furios;
const close = new Image();
close.src = Close;

//-----Coments------

const popBtn = document.createElement('button');
popBtn.classList.add('pop');
popBtn.setAttribute('type', 'button');
popBtn.innerText = 'Comments';
document.body.appendChild(popBtn);

//-----Pop-up-------

const comments = document.getElementById('comments');
furios.classList.add('fast');
close.classList.add('closeBtn');
const titleMovie = document.createElement('h2');
titleMovie.innerText = 'Name Movie';
const infoApi = document.createElement('p');
infoApi.innerText = 'Information about movie(API_1)';
const oldComments = document.createElement('h3');
oldComments.innerText = 'comments(2)(API_2)';
const commentOld1 = document.createElement('ul');
const listComments = document.createElement('li');
const listComments2 = document.createElement('li');
commentOld1.appendChild(listComments);
commentOld1.appendChild(listComments2);
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
commentBoxes.appendChild(addCommentTitle);
commentBoxes.appendChild(nameUser);
commentBoxes.appendChild(textComment);
commentBoxes.appendChild(sendBtn);

comments.appendChild(close);
comments.appendChild(furios);
comments.appendChild(titleMovie);
comments.appendChild(infoApi);
comments.appendChild(oldComments);
comments.appendChild(commentOld1);
comments.appendChild(commentBoxes);

//------Events---
popBtn.addEventListener('click', (e) => {
  e.preventDefault();
  comments.style.visibility = 'visible';
});

close.addEventListener('click', (e) => {
  e.preventDefault();
  comments.style.visibility = 'hidden';
});

//------Footer-------
const footer = document.createElement('footer');
const textFooter = document.createElement('p');
textFooter.innerText = 'Created by microverse under CC license';
footer.appendChild(textFooter);
document.lastElementChild.appendChild(footer);
