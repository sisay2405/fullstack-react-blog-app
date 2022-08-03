import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #D8D8D8;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 0;
    // min-height: 100vh;
    button {
      cursor: pointer;
      padding: 0.5rem 2rem;
      width: 150px;
    }
  }
  .item-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px;
    border: 1px solid black;
  }
  .item-label {
    font-weight: 600;
    margin-right: 8px;
  }
  .app {
    font-family: sans-serif;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  .filter-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  #category-list {
    padding: 5px;
  }
  .sport-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

export default GlobalStyle;
