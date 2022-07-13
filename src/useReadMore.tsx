import { useState, useEffect } from 'react';
import { Config } from './types';
/**
 * @function React hook for quick and elegant use in read more buttons
 * @param {string} text - text to be transformed into a read more version
 * @param {number} treshold - percent of text set as excerpt (firstPart)
 * @param {number} firstPartMaxLength - max length of excerpt (firstPart)
 * @returns Array with text split into two parts
 */

export default function useReadMore(
  text: string,
  config?: Config
): {
  firstPart: string;
  secondPart: string;
} {
  if (!config) config = {};
  const { treshold = 50, firstPartMaxLength = -1 } = config;

  if (text.length === 0)
    throw new Error('Text length should be greater than 0');
  if (treshold <= 0 || treshold >= 100)
    throw new Error('Treshold should be greater than 0 and less than 100');

  const textArray = text.split(' ');

  const [firstPart, setFirstPart] = useState<string>(
    textArray
      .slice(0, Math.floor((textArray.length * treshold) / 100))
      .join(' ')
  );

  const [secondPart, setSecondPart] = useState<string>(
    text
      .split(' ')
      .slice(Math.floor((textArray.length * treshold) / 100), textArray.length)
      .join(' ')
  );

  useEffect(() => {
    if (firstPartMaxLength !== -1) {
      setFirstPart((currentFirstPart) =>
        currentFirstPart.split(' ').slice(0, firstPartMaxLength).join(' ')
      );

      setSecondPart(
        textArray.slice(firstPartMaxLength, textArray.length).join(' ')
      );
    }
  }, [firstPartMaxLength, textArray]);

  return {
    firstPart,
    secondPart,
  };
}
