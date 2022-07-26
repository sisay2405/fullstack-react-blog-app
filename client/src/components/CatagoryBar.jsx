import React, { useState } from 'react';
import styled from 'styled-components';

const Catagorywrapperr = styled.footer`
  color: #fefefe;
  padding: 1rem 0;
  margin-right: 100px;
  text-align: center;
  .CatagoryInput{
    width: 100px;
  }
  button {
    margin: 0.25rem 0;
    width: 100%;
  }
  h3{
    color:black;
  }
`;
const CatagoryBar = () => {
  const [myCatagory, setMyCatagory] = useState('All');

  const handleChange = (event) => {
    setMyCatagory(event.target.value);
  };
  return (
    <Catagorywrapperr>
      <h3>VIEW CATEGORY</h3>
      <form>
        <div className="CatagoryInput">
          <select value={myCatagory} onChange={handleChange}>
            <option>All</option>
            <option>Pirate</option>
            <option>Cat</option>
            <option>Hackathon</option>
          </select>
        </div>
        <button type="submit">VIEW CATAGORY POSTS</button>
      </form>
      <h3>ADD A CATEGORY</h3>
      <form>
        <div className="CatagoryInput">
          <input
            type="text"
            id="searchTerm"
            placeholder="Catagory Name"
          />
        </div>
        <button type="submit">ADD CATAGORY</button>
      </form>
    </Catagorywrapperr>
  );
};

export default CatagoryBar;
