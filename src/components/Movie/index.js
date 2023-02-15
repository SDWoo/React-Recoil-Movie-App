import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { movieId } from '../../recoil/atoms';
import { DetailMovie } from '../../recoil/selectors';

const MovieAppContainer = styled.div`
  display: flex;

  font-size: 16px;
  background-color: #111;
  min-height: 100vh;
  color: red;
  font-family: 'Bebas Neue', cursive;
  position: relative;
`;

const MovieDetailContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MovieDetail = styled.div`
  display: flex;
  width: 90%;
  height: 80vh;
`;
const MovieImageCotainer = styled.div`
  width: 50%;
  text-align: center;
`;
const MovieImage = styled.img`
  width: 80%;
  height: 100%;
  background-size: cover;
`;
const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  padding: 20px 50px;
  color: white;
  background-color: rgba(36, 37, 39, 0.3);
`;
const MovieTitle = styled.h1`
  font-size: 80px;
`;
const MovieSubTitle = styled.h2`
  margin: 10px 0;
  font-size: 24px;
`;
const MovieInfos = styled.span`
  color: rgb(140, 255, 0);
  margin-bottom: 10px;
`;
const MovieInfo = styled.span`
  color: gray;
  font-family: Arial, Helvetica, sans-serif;
`;
const HomeButton = styled.button`
  position: absolute;
  top: 20px;
  right: 40px;
  padding: 10px 15px;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  color: white;

  &:hover {
    background-color: rgb(96, 92, 92);
  }
`;
const Movie = () => {
  const movie = useRecoilValue(DetailMovie);
  const setMovieId = useSetRecoilState(movieId);
  let { id } = useParams();

  useEffect(() => {
    if (!movie) {
      setMovieId(id);
    }
  }, [movie, id, setMovieId]);

  return (
    <MovieAppContainer>
      <MovieDetailContainer>
        <Link to='/'>
          <HomeButton>HOME</HomeButton>
        </Link>
        <MovieDetail>
          <MovieImageCotainer>
            <MovieImage src={movie.Poster} />
          </MovieImageCotainer>
          <MovieInfoContainer>
            <MovieTitle>{movie.Title}</MovieTitle>
            <MovieInfos>
              {movie.Released} / {movie.Runtime}
            </MovieInfos>
            <MovieInfo>{movie.Plot}</MovieInfo>
            <MovieSubTitle>Ratings</MovieSubTitle>
            {movie.Ratings.map((Rating) => (
              <MovieInfo key={Rating.Value}>
                {Rating.Source} {Rating.Value}
              </MovieInfo>
            ))}
            <MovieSubTitle>Actors</MovieSubTitle>
            <MovieInfo>{movie.Actors}</MovieInfo>
            <MovieSubTitle>Director</MovieSubTitle>
            <MovieInfo>{movie.Director}</MovieInfo>
            <MovieSubTitle>Production</MovieSubTitle>
            <MovieInfo>{movie.Production}</MovieInfo>
          </MovieInfoContainer>
        </MovieDetail>
      </MovieDetailContainer>
    </MovieAppContainer>
  );
};

export default Movie;
