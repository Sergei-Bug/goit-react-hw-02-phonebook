import styled from '@emotion/styled';

export const Input = styled.input`
  padding: 10px 15px;
  border-radius: 7px;
  border: 3px solid #9abde7;
  font-size: 24px;
  transition: background-color 150ms linear, border 150ms linear;
  &:focus {
    border: 3px solid #6a5acd;
    background-color: #e6e6fa;
  }
`;
