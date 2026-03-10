import { useState } from 'react';

export const useDentalTheme = (initial = false) => {
  const [isDentalTheme, setIsDentalTheme] = useState(initial);

  const toggleDentalTheme = () => {
    setIsDentalTheme(prev => !prev);
  };

  return {
    isDentalTheme,
    toggleDentalTheme,
  };
};
