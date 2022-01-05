import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { api } from '../../services/api'

type adviceProps={
  slip:{
    advice: string;
    id: number
  }
}


type AdviceProps = {
  advice: string;
}

export const Advice: React.FC = () => {
  const [adviceItem, setAdviceItem] = useState({} as adviceProps)
  
  async function getAdvice(){
    const response = await (await api.get('https://api.adviceslip.com/advice'))
    const data = response.data
    setAdviceItem(data)
    alert(data.slip.advice)
  }
  return (
    <Container >
      <button onClick={getAdvice}>send</button>
    </Container>
  )
}
