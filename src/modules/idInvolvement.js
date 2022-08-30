fetch(
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps',
  {
    method: 'POST',
    body: JSON.stringify({
      name: 'movies show',
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  }
)
  .then((res) => res.json())
  .then((data) => data);
