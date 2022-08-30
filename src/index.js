import './styles/main.scss';

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

// generate like
const uniqueId = 'w6gyfRjKef7dpeJ8lwcd';
class Likes {
  static getLikes = async () => {
    const res = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/w6gyfRjKef7dpeJ8lwcd/likes'
    );
    const data = await res.json();
    console.log(data);
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

  static getComments = async (id) => {
    const res = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/w6gyfRjKef7dpeJ8lwcd/comments'
    );
    const comment = await res.json();
    console.log(comment);
  };
}
Likes.postComments(2, 'john', 'yea');
// Likes.getComments(2);
Likes.addLikes(17);
Likes.getLikes();
