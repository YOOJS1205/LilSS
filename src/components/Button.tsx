import React from 'react';
import styled from 'styled-components';

interface IProps {
  children: string;
  enabled: boolean;
  onClick: any;
}

interface IInnerScreen {
  enabled: boolean;
}

export default function Button({ children, enabled, onClick }: IProps) {
  return (
    <BlueButton enabled={enabled} onClick={onClick}>
      {children}
    </BlueButton>
  );
}

const BlueButton = styled.button<IInnerScreen>`
  background-color: #0064ff;
  border: none;
  color: white;
  font-size: 14px;
  border-radius: 10px;
  padding: 15px 0;
  width: 300px;
  height: 50px;
  opacity: ${props => (props.enabled ? '1' : '0.7')};
  cursor: pointer;
`;
