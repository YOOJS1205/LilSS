import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Container from '../components/Container';
import Button from '../components/Button';

export default function Home() {
  const navigate = useNavigate();
  const onClickStartButton = () => {
    navigate('/price');
  };
  return (
    <Container>
      <Title>간편하게 송금해보세요.</Title>
      <Button enabled={true} onClick={onClickStartButton}>
        시작하기
      </Button>
    </Container>
  );
}

const Title = styled.h1`
  margin-top: 200px;
`;
