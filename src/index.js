import './styles/main.scss';
import showPop from './popup.js';

class UI {
  static getMovies = async () => {
    const res = await fetch('https://api.tvmaze.com/shows');
    const data = await res.json();

    data.forEach((x) => {
      const cardsContainer = document.querySelector('.cardsContainer');
      let div = document.createElement('div');
      div.className = 'cards';

      const imgDiv = document.createElement('div');
      imgDiv.classList.add('cardImg');
      const cardImg = document.createElement('img');
      cardImg.src = `${x.image.medium}`;
      imgDiv.appendChild(cardImg);

      const rateDiv = document.createElement('div');
      rateDiv.classList.add('cardStar');
      const starSpan = document.createElement('span');
      starSpan.textContent = '⭐';
      const rateSpan = document.createElement('span');
      rateSpan.textContent = `${x.id}`;
      rateDiv.appendChild(starSpan);
      rateDiv.appendChild(rateSpan);

      const titleDiv = document.createElement('div');
      titleDiv.classList.add('cardTitle');
      titleDiv.textContent = `${x.name}`;

      const commentsDiv = document.createElement('div');
      commentsDiv.classList.add('comments');
      const commentsBtn = document.createElement('button');
      commentsBtn.textContent = 'Comments';
      commentsDiv.appendChild(commentsBtn);

      div.appendChild(imgDiv);
      div.appendChild(rateDiv);
      div.appendChild(titleDiv);
      div.appendChild(commentsDiv);
      cardsContainer.appendChild(div);

      commentsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showPop();
      });
    });
  };
}

UI.getMovies();

// generate like
const uniqueId = 'w6gyfRjKef7dpeJ8lwcd';
class Likes {
  static getLikes = async () => {
    const res = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/w6gyfRjKef7dpeJ8lwcd/likes'
    );
    const data = await res.json();
    return data;
  };
  static addLikes = async (id) => {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/w6gyfRjKef7dpeJ8lwcd/likes',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: id,
        }),
      }
    );
    const post = await response.text();
    return post;
  };

  static postComments = async (id, name, comment) => {
    const res = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/w6gyfRjKef7dpeJ8lwcd/comments',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: id,
          username: name,
          comment: comment,
        }),
      }
    );
    const post = await res.text();
    console.log(post);
  };

  static getComments = async () => {
    const res = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/w6gyfRjKef7dpeJ8lwcd/comments'
    );
    const comment = await res.json();
  };
}
Likes.postComments(2, 'john', 'yea');
Likes.getComments();
Likes.addLikes(17);
Likes.getLikes();

import './popup.js';
