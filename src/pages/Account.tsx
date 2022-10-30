import React from 'react';
import { useRecoilState } from 'recoil';
import { priceState } from './Price';

export default function Account() {
  const price = useRecoilState(priceState);
  console.log(price);
  return <div>Account</div>;
}
