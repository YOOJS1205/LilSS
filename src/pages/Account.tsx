import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { priceState } from './Price';
import { getMyAccount } from '../api/accountAPI';

import Container from '../components/Container';

export default function Account() {
  const price = useRecoilState(priceState)[0];

  const account = getMyAccount();
  console.log(account);

  return (
    <Container>
      <TopText>{price}원 송금</TopText>
    </Container>
  );
}

const TopText = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;
