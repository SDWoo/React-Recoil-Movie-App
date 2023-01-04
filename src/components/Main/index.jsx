import styled from '@emotion/styled';
import React from 'react';
import MovieAppContents from '../MovieAppContents';
import MovieAppHeader from '../MovieAppHeader';

const MovieAppContainer = styled.div`
  display: flex;

  font-size: 16px;
  background-color: #111;
  min-height: 100vh;
  color: red;
  font-family: 'Bebas Neue', cursive;
  position: relative;
`;

const MovieApp = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;
const Main = () => {
  return (
    <MovieAppContainer>
      <MovieApp>
        <MovieAppHeader />
        <MovieAppContents />
      </MovieApp>
    </MovieAppContainer>
  );
};

export default Main;
