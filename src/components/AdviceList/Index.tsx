import React from 'react';
import { Advice } from '../Advice';

import { Container } from './styles';



export const AdviceList: React.FC = () => {

  return (
    <Container>
      <main>
        <ul>
          <Advice />
          

        </ul>
      </main>
    </Container>
  )
}
