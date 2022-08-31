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
