import React from 'react';

import { Config } from '../src/types';

import useReadMore from '../src/index';

interface UseReadMoreTestComponentProps {
  text: string;
  config?: Config;
}

const UseReadMoreTestComponent: React.FC<UseReadMoreTestComponentProps> = ({
  text,
  config,
}) => {
  if (!config) config = {};

  const { firstPart, secondPart } = useReadMore(text, config);

  return (
    <>
      <p data-testid="first-part">First part: {firstPart}</p>
      <p data-testid="second-part">Second part: {secondPart}</p>
    </>
  );
};

export default UseReadMoreTestComponent;
