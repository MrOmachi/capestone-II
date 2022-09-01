import { describe, expect, test } from '@jest/globals';
import { comments, totalMovies, totalNumMovies } from './__mock__/fake_api.js';
// import UI from '../index.js';

describe('Total Number of Comments', () => {
  test(' Test1', () => {
    expect(comments.length).toBe(3);
  });
  test('Test2', () => {
    expect(typeof comments[0]).toEqual('object');
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
