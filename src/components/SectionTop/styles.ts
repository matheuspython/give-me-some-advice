import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 80vh;
  .container{
    width: 100%;
    height: 100%;
    max-width: 1280px;
    padding: 0 2%;
    margin: 5px auto;

    display: flex;
    align-items: center;
    justify-content: center;
    main{
      width: 400px;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 12px;
      background: ${theme => theme.theme.colors.primary};
      gap: 10px;
      border-radius: 12px;
      img{
        width: 100%;
      }
    }
  }
`;
