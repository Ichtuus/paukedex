import { css } from "lit-element";
export const pokeSearchStyle = css`
  .pokesearch-body {
    display: flex;
    justify-content: center;
    background-color: #292826;
    margin: 0;
    overflow: hidden;
    align-items: center;
    height: 100vh;
    transition: height 1s ease;
  }

  .pokesearch-error {
    color: #F00020;
  }

  .pokesearch-body.toggleWrap {
    height: 100px;
  }

  .container {
    margin: 2rem;
    width: 400px;
  }

  input[type="search"] {
    -webkit-appearance: none !important;
    background-clip: padding-box;
    background-color: white;
    vertical-align: middle;
    border-radius: 0.25rem;
    border: 1px solid #e0e0e5;
    font-size: 1rem;
    width: 100%;
    line-height: 2;
    padding: 0.375rem 1.25rem;
    -webkit-transition: border-color 0.2s;
    -moz-transition: border-color 0.2s;
    transition: border-color 0.2s;
  }

  input[type="search"]:focus {
    transition: all 0.5s;
    box-shadow: 0 0 40px #f9d442b9;
    border-color: #f9d342;
    outline: none;
  }

  div.search-form {
    display: flex;
    justify-content: center;
  }

  label {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    align-self: center;
    margin-bottom: 0;
  }

  input.search-field {
    margin-bottom: 0;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    align-self: center;
    height: 51px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  input.search-submit {
    width: 50px;
  }

  .screen-reader-text {
    clip: rect(1px, 1px, 1px, 1px);
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }

  .button {
    display: inline-block;
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 1.15;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    background: #f9d342;
    color: #292826;
    border: 1px solid transparent;
    vertical-align: middle;
    text-shadow: none;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
  }

  .button:hover,
  .button:active,
  .button:focus {
    cursor: pointer;
    background: #d4b743;
    color: #292826;
    outline: 0;
  }
`;
