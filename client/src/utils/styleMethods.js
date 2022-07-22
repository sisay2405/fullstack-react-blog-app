/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components';

export const lighten = (color, val) => css`
  background-color: ${color};
  background-image: linear-gradient(
    0deg,
    rgba(255, 255, 255, ${val}) 0%,
    rgba(255, 255, 255, ${val}) 100%
  );
`;
