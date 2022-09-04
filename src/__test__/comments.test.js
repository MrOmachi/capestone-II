import { describe, expect, test } from '@jest/globals';
import { totalComment, totalNumMovies } from './__mock__/fake_api.js';
// import UI from '../index.js';

describe('Total Number of Comments', () => {
  test(' Test1', () => {
    const comments = [
      {
        username: 'clinton',
        creation_date: '2022-02-01',
        comment: 'Nice movie',
      },
      { comment: 'ahmed', creation_date: '2022-02-01', username: 'very scary' },

      { comment: 'ammar', creation_date: '2022-02-01', username: 'i like it' },
    ];

    const commentsTotal = totalComment(comments);

    expect(commentsTotal).toBe(3);
  });
  test(' Test1', () => {
    const comments2 = [
      {
        username: 'clinton',
        creation_date: '2022-02-01',
        comment: 'Nice movie',
      },
    ];
    const commentsTotal2 = totalComment(comments2);
    expect(commentsTotal2).toBe(1);
  });
});

describe('Total Number of movies', () => {
  test(' Test1', () => {
    const totalMovies = [
      {
        id: 1,
        name: 'movie 1',
      },
      {
        id: 2,
        name: 'movie 2',
      },
      {
        id: 3,
        name: 'movie 3',
      },
    ];
    const tmovies = totalNumMovies(totalMovies);

    expect(tmovies).toBe(3);
  });

  test('Test2', () => {
    const totalMovies2 = [
      {
        id: 1,
        name: 'movie 1',
      },
    ];
    const tmovies2 = totalNumMovies(totalMovies2);

    expect(tmovies2).toBe(1);
  });
});
