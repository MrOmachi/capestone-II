import { describe, expect, test } from '@jest/globals';
import { comments, totalMovies } from './__mock__/fake_api.js';

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
    expect(totalMovies.length).toBe(1);
  });
  test('Test2', () => {
    expect(typeof totalMovies[0]).toEqual('object');
  });
});
