import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

export const ListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 25px;
`;
export const ItemStyle = styled.li`
  color: #3119cd;
`;
export const DeleteBtn = styled.button`
  padding: 4px;
  margin-left: 10px;
  height: 100%;
  font-size: 12px;
  border-radius: 33.5px;
  background: #a656dc;
  border: none;
  &:hover {
    color: #fff;
    background-color: #a656dc;
    box-shadow: 1px 2px 6px 0px rgba(65, 33, 83, 0.7);
  }
  box-shadow: 0 2px 4px rgba(65, 33, 83, 0.7);
`;
