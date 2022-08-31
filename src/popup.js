import './styles/main.scss';
import Close from './assets/close.png';
import './index.js';
import Likes from './index.js';

//-----Coments------

//-----Pop-up-------

async function showPop(id) {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await res.json();

  const commentData = await Likes.getComments(id);

  const ImageGames = document.createElement('img');
  ImageGames.src = data.image.medium;

  const close = document.createElement('img');
  close.src = Close;

  const comments = document.getElementById('comments');
  comments.classList.add('commentss');
  ImageGames.classList.add('fast');
  close.classList.add('closeBtn');

  const titleMovie = document.createElement('h2');
  titleMovie.textContent = `${data.name}`;

  const infoApi = document.createElement('p');
  infoApi.innerHTML = `${data.summary}`;

  const oldComments = document.createElement('h3');
  oldComments.innerText = `Todat Comments: ${commentData.length}`;
  const commentOld1 = document.createElement('ul');
  console.log(commentData.error);
  if (!commentData.error) {
    commentData.forEach((x) => {
      const listComments = document.createElement('li');
      const listComments2 = document.createElement('li');
      const hr = document.createElement('hr');
      listComments.textContent = `User Name: ${x.username}`;
      listComments2.textContent = `Comment: ${x.comment}`;
      commentOld1.appendChild(listComments);
      commentOld1.appendChild(listComments2);
      commentOld1.appendChild(hr);
    });
  } else {
    const listComments = document.createElement('li');
    const listComments2 = document.createElement('li');
    const hr = document.createElement('hr');
    listComments2.textContent = ` No comment on this movie`;
    commentOld1.appendChild(listComments);
    commentOld1.appendChild(listComments2);
    commentOld1.appendChild(hr);
  }

  const commentBoxes = document.createElement('form');
  commentBoxes.classList.add('cm');
  const addCommentTitle = document.createElement('h2');
  addCommentTitle.textContent = 'Add a comment';
  const nameUser = document.createElement('input');
  nameUser.setAttribute('placeholder', 'Your name');
  const textComment = document.createElement('input');
  textComment.classList.add('insights');
  textComment.setAttribute('placeholder', 'Your insights');
  const sendBtn = document.createElement('button');
  sendBtn.textContent = 'Send Comment';
  commentBoxes.appendChild(addCommentTitle);
  commentBoxes.appendChild(nameUser);
  commentBoxes.appendChild(textComment);
  commentBoxes.appendChild(sendBtn);

  comments.appendChild(close);
  comments.appendChild(ImageGames);
  comments.appendChild(titleMovie);
  comments.appendChild(infoApi);
  comments.appendChild(oldComments);
  comments.appendChild(commentOld1);
  comments.appendChild(commentBoxes);

  close.addEventListener('click', (e) => {
    e.preventDefault();
    comments.classList.remove('commentss');
    window.location.reload();
  });
}

// ------Footer-------
const footer = document.createElement('footer');
const textFooter = document.createElement('p');
textFooter.textContent = 'Created by microverse under CC license';
footer.appendChild(textFooter);
document.lastElementChild.appendChild(footer);

export default showPop;