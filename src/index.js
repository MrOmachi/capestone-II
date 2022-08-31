import './styles/main.scss';
import {UI} from'./modules/api_movies.js';
import {addLikes} from'./modules/api_likes.js';


//-----Likes----
document.addEventListener('click', (e) => {
 //e.preventDefault();
if(e.target.matches('.like')){
  console.log(e.target.id, 'soy id');
addLikes(e.target.id)
location.reload();

}
});

//-----Pop-up-------

document.addEventListener('click', (e) => {
  e.preventDefault();
if(e.target.matches('.pop')){
 comments.style.visibility = 'visible';
 UI.renderFeatures(e)  
 //location.reload();
}
});

document.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.matches('.closeBtn')){
    comments.style.visibility = 'hidden';
    UI.renderFeatures(e)
    location.reload();
    }
  });



//------Footer-------
const footer = document.createElement('footer');
const textFooter = document.createElement('p');
textFooter.innerText = 'Created by microverse under CC license';
footer.appendChild(textFooter);
document.lastElementChild.appendChild(footer);



UI.displayMovies();
