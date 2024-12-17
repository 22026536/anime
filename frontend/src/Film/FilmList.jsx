import React from 'react'
import styled from 'styled-components';
const FilmListStyled = styled.div`
  display: flex;
  left:'auto';
  flex-wrap: wrap;
  gap:10px;
  padding-left: 10%;
`;
export default function FilmList(props) {
  return (
    <FilmListStyled>
      {props.children}
      </FilmListStyled>
  )
}
