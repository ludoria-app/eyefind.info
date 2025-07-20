'use client';

import { useState, useEffect } from 'react';
import { bleets } from '@app/mocks/bleets';

export const useRandomBleets = () => {
  const [randomBleets, setRandomBleets] = useState(bleets.slice(0, 2));

  useEffect(() => {
    const shuffled = bleets.sort(() => Math.random() - 0.5).slice(0, 2);
    setRandomBleets(shuffled);
  }, []);

  return randomBleets;
};
