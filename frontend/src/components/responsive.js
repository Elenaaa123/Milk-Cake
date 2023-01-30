import { css } from 'styled-components';

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props};
    }
  `;
};

export const table = (props) => {
  return css`
    @media only screen and (max-width: 640px) {
      ${props}
    }
  `;
};

export const desktop = (props) => {
  return css`
    @media only screen and (max-width: 960px) {
      ${props}
    }
  `;
};
