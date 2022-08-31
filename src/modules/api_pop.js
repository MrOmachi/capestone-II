
  //-----API LIKES AND COMMENTS-------
  const uniqueId = 'w6gyfRjKef7dpeJ8lwcd';

 export const getLikes = async () => {          
    const res = await fetch(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/w6gyfRjKef7dpeJ8lwcd/likes'
        );
        const data = await res.json();          
        
  return data;
};
 export const addLikes = async (id) => {
        const nId = parseInt(id, 10)
        const response = await fetch(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/w6gyfRjKef7dpeJ8lwcd/likes',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              item_id: nId,
          }),
        }
      );
      const post = await response.text();
      return post;
    };
  
 export const postComments = async (id, name, comment) => {
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
  
  export const getComments = async () => {
      const res = await fetch(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/w6gyfRjKef7dpeJ8lwcd/comments'
      );
      const comment = await res.json();
      console.log(comment);
    };


//-----API MOVIES-----
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
   
}