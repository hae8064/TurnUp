import React from 'react';
import useSwrTest from './swr';

const SwrComponent = () => {
  const { product, isError } = useSwrTest();
  console.log(product, isError);
  //   return <div>swrComponent</div>;

  return <div>Swr 데이터</div>;
};

export default SwrComponent;
