import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.li`
  width: 350px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 5px 15px;
  border-radius: 7px;
  cursor: pointer;
  color: #f23737;
  background-color: #ffe5e5;
  border: 2px solid #ff7c7c;
  transition: background-color 250ms linear, color 250ms linear,
    transform 150ms linear;

  &:hover {
    color: #ffffff;
    background-color: #ff7c7c;
    transform: translateY(2px);
  }
`;
