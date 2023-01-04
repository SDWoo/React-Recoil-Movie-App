import { atomFamily, atom } from 'recoil';

export const inputState = atom({
  key: 'inputState',
  default: '',
});

export const pageState = atom({
  key: 'pageState',
  default: 1,
});

export const movieId = atom({
  key: 'movieId',
  default: '',
});
