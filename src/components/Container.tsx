import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
  children: ReactNode;
}

export default function Container({ children }: IProps) {
  return <Box>{children}</Box>;
}

const Box = styled.article`
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 600px;
  padding: 20px 50px;
  border-radius: 10px;
  background-color: #f3f3f3;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
