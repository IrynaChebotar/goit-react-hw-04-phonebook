import styled from 'styled-components';

import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 15px;
`;

export const StyledField = styled(Field)`
  width: 200px;
  border-radius: 15px;
  outline: none;
  border: 1px solid green;
  padding: 5px;
  background-color: #ffffff;
  box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.5);
`;

export const AddBtn = styled.button`
  margin-top: 60px;
  padding: 4px;
  width: 10%;
  height: 100%;
  border-radius: 15px;
  background: #a656dc;
  border: none;
  &:hover {
    color: #fff;
    background-color: #a656dc;
    box-shadow: 1px 2px 6px 0px rgba(65, 33, 83, 0.7);
  }
  box-shadow: 0 2px 4px rgba(65, 33, 83, 0.7);
`;

export const StyledError = styled(ErrorMessage)`
  width: 150px;
  margin-top: 10px;
  color: red;
  font-size: 10px;
`;
