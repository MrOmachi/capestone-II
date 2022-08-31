
import {addLikes, getLikes} from'./api_likes.js';
import Close from '../assets/close.png';

const close = new Image();
close.src = Close;


export class UI {
    static getMovies = async () => {
      const res = await fetch('https://api.tvmaze.com/shows');
      const data = await res.json();
      return data
    } 
     
        static displayMovies= async () => {
        const api = await this.getMovies()      
        const likes = await getLikes()
        console.log(likes);             
         for (let i = 1; i < 8; i++) {    
            let x = i 
            const itemId = likes.filter(el => x+1 === el.item_id)

        const cardsContainer = document.querySelector('.cardsContainer');
        let div = document.createElement('div');
        div.className = 'cards';
        const header = document.querySelector('header');
        header.innerHTML = `
        <h1>Movies</h1>
        <h3>Number of movies: <span class="moviesNumber"></span>${api[i].id}</h3>
        `;
        div.innerHTML = `
      <div class="cardImg">
        <img src=${api[i].image.medium} alt="" />
      </div>
      <div class="cardStar"><span class='like' id=${api[i].id}>⭐</span><span>${itemId[0].likes}</span></div>
      <div class="cardTitle">${api[i].name}</div>
      <div class="comments">
      <button class='pop' id='${api[i].id}' type="button">Comments</button>
      </div>
      `;
        cardsContainer.appendChild(div); 
     
    };
  }
    //-----Pop-up-------
    static renderFeatures = async (event)=>{
      const api =await UI.getMovies()
      console.log(api);
      console.log(typeof event.target.id);
      console.log(api[0].image.medium);  
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

}
   

