import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { atom } from 'recoil';

import Container from '../components/Container';
import Button from '../components/Button';

interface IProps {
  onClick: any;
}

export default function Price() {
  const navigate = useNavigate();
  const [price, setPrice] = useState('');

  const onClickSendButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!price) {
        e.preventDefault();
      } else {
        navigate('/account');
      }
    },
    [price],
  );

  const onClickPriceButton = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLLIElement;
      if (target.nodeName === 'LI') {
        if (!isNaN(parseInt(target.innerText))) {
          setPrice(prev => (prev += target.innerText));
        } else if (target.innerText === '삭제') {
          setPrice(prev => prev.substring(0, prev.length - 1));
        } else {
          navigate('/');
        }
      }
    },
    [price],
  );
  return (
    <Container>
      <SendPrice>{!price ? '얼마를 보낼까요?' : `${price}원`}</SendPrice>
      <Buttons onClick={onClickPriceButton}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <ul>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
        <ul>
          <li>7</li>
          <li>8</li>
          <li>9</li>
        </ul>
        <ul>
          <li>취소</li>
          <li>0</li>
          <li>삭제</li>
        </ul>
      </Buttons>
      <Button enabled={!!price} onClick={onClickSendButton}>
        보내기
      </Button>
    </Container>
  );
}

const SendPrice = styled.h1``;

const Buttons = styled.div<IProps>`
  font-size: 20px;
  ul {
    padding: none;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  li {
    cursor: pointer;
  }
`;
