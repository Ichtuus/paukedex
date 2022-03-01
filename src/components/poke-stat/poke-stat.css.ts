import { css } from "lit-element";
export const pokeStatStyle = css`
  :host(#one) {
    background-color: #e64d35;
    border-radius: 50% 0 50% 0;
    grid-row: 1;
    grid-column: 1;
  }
  :host(#two) {
    background-color: #e64d35;
    border-radius: 0 50% 0 50%;
    grid-row: 1;
    grid-column: 3;
  }
  :host(#three) {
    background-color: #e64d35;
    border-radius: 0 50% 0 0;
    grid-row: 2;
    grid-column: 1;
  }
  :host(#four) {
    background-color: #e64d35;
    border-radius: 50% 0 0 0;
    grid-row: 2;
    grid-column: 3;
  }
`;
