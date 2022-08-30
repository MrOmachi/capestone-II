import './styles/main.scss';
import img from './assets/bj.jpeg';

class UI {
  static getMovies = async () => {
    const res = await fetch('https://api.tvmaze.com/shows');
    const data = await res.json();

    data.forEach((x) => {
      const cardsContainer = document.querySelector('.cardsContainer');
      let div = document.createElement('div');
      div.className = 'cards';
      const header = document.querySelector('header');

      header.innerHTML = `
      <h1>Movies</h1>
      <h3>Number of movies: <span class="moviesNumber"></span>${x.id}</h3>
      `;

      div.innerHTML = `
    <div class="cardImg">
      <img src=${x.image.medium} alt="" />
    </div>
    <div class="cardStar"><span>⭐</span><span>${x.id}</span></div>
    <div class="cardTitle">${x.name}</div>
    <div class="comments">
    <button class='commentsBtn' type="button">Comments</button>
    </div>
    `;
      cardsContainer.appendChild(div);
    });
  };
}

UI.getMovies();
