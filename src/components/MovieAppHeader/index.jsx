import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import IconSearch from '../../assets/IconSearch';
import { inputState } from '../../recoil/atoms';
const MoiveInputContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  height: 20%;
`;

const MovieAppTitle = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
`;

const MovieAppForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 35px;
  padding: 10 15px;
  background-color: white;
  border: none;
  border-radius: 12px;
`;

const MovieAppInput = styled.input`
  width: 80%;
  font-size: 16px;
  margin: 2px 5px;
  padding: 10 15px;
  outline: none;
  border: none;
`;

const MovieAppSearchButton = styled.button`
  width: 10%;
  height: 90%;
  border: none;
  border-radius: 0 50px 50px 0;
  background-color: #fff;
  cursor: pointer;
`;

const MovieAppHeader = () => {
  const [value, setValue] = useState('');
  const setTitle = useSetRecoilState(inputState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setTitle(value); // 여기서부터 문제

    setValue('');
  };

  return (
    <MoiveInputContainer>
      <MovieAppTitle>DongFlix</MovieAppTitle>
      <MovieAppForm onSubmit={handleSearch}>
        <MovieAppInput value={value} onChange={handleChange} />
        <MovieAppSearchButton type='submit'>
          <IconSearch width='20' height='20'></IconSearch>
        </MovieAppSearchButton>
      </MovieAppForm>
    </MoiveInputContainer>
  );
};

export default MovieAppHeader;
