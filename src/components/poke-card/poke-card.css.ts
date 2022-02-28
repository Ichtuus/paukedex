import { css } from "lit-element";
export const pokeCardStyle = css`
  .pokecard {
    display: none;
  }
  .pokecard.hasPokemon {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 230px 1fr;
    visibility: visible;
    justify-content: center;
    margin: 24px 14px;
  }
  .pokecard-body {
    grid-row: 2;
    grid-column: 2;
  }

  .pokecard-body .pokeball:after {
    z-index: -1;
  }

  .pokeball {
    position: relative;
    width: 300px;
    height: 300px;
    background: linear-gradient(
      to bottom,
      #e53935,
      #e53935 48%,
      #212121 48%,
      #212121 55%,
      #fff 55%
    );
    border-radius: 50%;
    border: 20px solid #212121;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2), inset 8px 5px 0 rgba(0, 0, 0, 0.2);
  }

  .pokeball:before {
    content: "";
    display: block;
    position: absolute;
    top: 40px;
    right: 40px;
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
  }

  .pokeball:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    background-color: #fff;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    border: 15px solid #212121;
    box-shadow: -5px -3px 0 rgba(0, 0, 0, 0.2);
  }
`;
