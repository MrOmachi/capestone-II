import './styles/main.scss';
import showPop from './popup.js';
import movieImg from './assets/video-player.png';
import Likes from './modules/likeComment';

class UI {
  static Movies = async () => {
    const res = await fetch('https://api.tvmaze.com/shows');
    const data = await res.json();
    const dataS = data.slice(0, 20);
    this.totalNumMovies(dataS);
  };

  static totalNumMovies = (dataS) => {
    return dataS.length;
  };

  static getMovies = async () => {
    const res = await fetch('https://api.tvmaze.com/shows');
    const data = await res.json();
    const dataS = data.slice(0, 20);

    const hearder = document.querySelector('header');
    const headerImg = document.createElement('img');
    headerImg.src = movieImg;
    const h1 = document.createElement('h1');
    h1.textContent = 'Movies';
    const h3 = document.createElement('h3');
    h3.textContent = `Total Number of movies: ${dataS.length}`;
    hearder.append(headerImg, h1, h3);

    const likedata = await Likes.getLikes();
    dataS.forEach((x) => {
      likedata.forEach((y) => {
        y.item_id === x.id ? (x.like = y.likes) : x;
      });

      const cardsContainer = document.querySelector('.cardsContainer');
      const div = document.createElement('div');
      div.className = 'cards';

      const imgDiv = document.createElement('div');
      imgDiv.classList.add('cardImg');
      const cardImg = document.createElement('img');
      cardImg.src = `${x.image.medium}`;
      imgDiv.appendChild(cardImg);

      const rateDiv = document.createElement('div');
      rateDiv.classList.add('cardStar');
      const starSpan = document.createElement('span');
      starSpan.classList.add('starspan');
      starSpan.textContent = '⭐';
      const rateSpan = document.createElement('span');
      rateSpan.textContent = x.like && `${x.like}`;
      rateDiv.appendChild(starSpan);
      rateDiv.appendChild(rateSpan);

      starSpan.addEventListener('click', () => {
        Likes.addLikes(x.id);
        Likes.getLikes();
        setTimeout(() => {
          window.location.reload();
        }, 500);
      });

      const titleDiv = document.createElement('div');
      titleDiv.classList.add('cardTitle');
      titleDiv.textContent = `${x.name}`;

      const commentsDiv = document.createElement('div');
      commentsDiv.classList.add('comments');
      const commentsBtn = document.createElement('button');
      commentsBtn.textContent = 'Comments';
      commentsBtn.className = 'commentsBtn';
      commentsDiv.appendChild(commentsBtn);

      div.appendChild(imgDiv);
      div.appendChild(rateDiv);
      div.appendChild(titleDiv);
      div.appendChild(commentsDiv);
      cardsContainer.appendChild(div);

      commentsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showPop(x.id);
      });
    });
  };
}
UI.getMovies();
export default UI;
