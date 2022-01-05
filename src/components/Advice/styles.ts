import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  button{
    width: 250px;
    height: 45px;
    border-radius: 14px;
    border: 0;
    background: ${theme => theme.theme.colors.secundary};
    color:${theme => theme.theme.colors.text};
    cursor: pointer;
  }
`;
