import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { movieId } from '../../recoil/atoms';
import { DetailMovie, MovieList } from '../../recoil/selectors';

const MovieContentsContainer = styled.section`
  width: 80vw;
  padding: 20px;
  border-radius: 8px;
  background-color: rgb(40, 40, 42);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const MovieContent = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 4px;
  background-color: black;
  position: relative;
`;

const MovieContentPoster = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  overflow: hidden;
`;

const MovieContentInfo = styled.div`
  display: flex;
  flex-direction: column;

  background-color: rgba(14, 17, 27, 0.3);
  color: rgb(229, 217, 82);
  backdrop-filter: blur(10px);
  width: 100%;
  padding: 14px;
  box-sizing: border-box;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
`;
const MovieContentTitle = styled.span`
  font-size: 20px;
`;
const MovieContentYear = styled.span`
  font-size: 14px;
`;

const MovieAppContents = () => {
  const movies = useRecoilValue(MovieList);
  const [id, setId] = useRecoilState(movieId);
  const movie = useRecoilValue(DetailMovie);
  console.log(movies);

  const handleClick = (imdbID) => {
    console.log(imdbID);
    setId(imdbID);
    console.log(id, movie, imdbID);
  };

  return (
    <MovieContentsContainer>
      {!movies ? (
        <h1>Search Movie</h1>
      ) : (
        movies.map((movie) => (
          <MovieContent
            onClick={() => handleClick(movie.imdbID)}
            key={movie.imdbID}
          >
            <Link to={`/movie/${movie.imdbID}`}>
              <MovieContentPoster src={movie.Poster} />
              <MovieContentInfo>
                <MovieContentTitle>{movie.Title}</MovieContentTitle>
                <MovieContentYear>{movie.Year}</MovieContentYear>
              </MovieContentInfo>
            </Link>
          </MovieContent>
        ))
      )}
    </MovieContentsContainer>
  );
};

export default MovieAppContents;
