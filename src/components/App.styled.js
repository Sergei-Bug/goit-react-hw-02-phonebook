import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 30px;
`;
export const Form = styled.form`
  padding: 20px 35px;
  width: 400px;
  border-radius: 7px;
  border: 3px solid #9abde7;
`;

export const Title = styled.h2`
  font-size: 24px;
`;
export const Input = styled.input`
  padding: 8px 15px;
  display: block;
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 20px;
  border: 2px solid #9abde7;
  border-radius: 7px;
  transition: background-color 150ms linear, border 150ms linear;
  &:focus {
    border: 2px solid #6a5acd;
    background-color: #e6e6fa;
  }
`;
export const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 500;
`;
export const List = styled.ul``;
export const Button = styled.button`
  padding: 10px 25px;
  background-color: #c1ffcf;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  color: #3ca554;
  border-radius: 20px;
  border: 3px solid #7de695;
  transition: background-color 150ms linear, color 150ms linear,
    transform 150ms linear;
  &:hover {
    color: #ffffff;
    background-color: #7de695;
    transform: translateY(2px);
  }
`;
