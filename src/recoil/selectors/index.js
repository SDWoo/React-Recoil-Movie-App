import axios from 'axios';
import { selector, selectorFamily } from 'recoil';
import { inputState, movieId, pageState } from '../atoms';

const API_END_POINT = 'https://www.omdbapi.com';
const API_KEY = '7035c60c';

export const MovieList = selector({
  key: 'MovieList',
  get: async ({ get }) => {
    const { data } = await axios(
      `${API_END_POINT}?apikey=${API_KEY}&s=${get(inputState)}&page=${get(
        pageState
      )}`
    );
    console.log(data);

    return data.Search;
  },
});

export const DetailMovie = selector({
  key: 'DetailMovie',
  get: async ({ get }) => {
    const movieID = get(movieId);
    console.log(movieID);
    const { data } = await axios(
      `${API_END_POINT}?apikey=${API_KEY}&i=${movieID}&plot=full`
    );
    return data;
  },
});
