import React from 'react';
import { Description, Wrapper } from './ContactFilter.styled';
export function ContactFilter({ filter, onChangeFilter }) {
  return (
    <Wrapper>
      <p>Find contacts by name</p>
      <Description type="text" value={filter} onChange={onChangeFilter} />
    </Wrapper>
  );
}
