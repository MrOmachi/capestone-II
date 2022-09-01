const comments = [
  { username: 'clinton', creation_date: '2022-02-01', comment: 'Nice movie' },
  { comment: 'ahmed', creation_date: '2022-02-01', username: 'very scary' },
  { comment: 'ammar', creation_date: '2022-02-01', username: 'i like it' },
];

const totalNumMovies = (dataS) => {
  return dataS.length;
};

const totalMovies = [
  {
    id: 1,
    name: 'movie 1',
  },
];

export { comments, totalMovies, totalNumMovies };
