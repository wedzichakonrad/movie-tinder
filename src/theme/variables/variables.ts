import { colors } from './colors/colors';
import { sizes } from './sizes/sizes';
import { breakpoints } from './breakpoints/breakpoints';

export const variables: any = {
  breakpoints: { ...breakpoints },
  colors: { ...colors },
  sizes: { ...sizes },
  fontFamilies: {
    default: "'Poppins', sans-serif",
  },
  spacing: 8,
};

