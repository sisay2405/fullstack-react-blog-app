/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { getPosts } from '../store/postSlice';
import { getCatagory, setCatagory } from '../store/categorySlice';
import { lighten } from '../utils/styleMethods';

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
const CardWrapper = styled.article`
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-bottom: 1rem;
  padding: 1.5rem;
  white-space: pre-line;
  &:hover {
    ${lighten('#009900', 0.8)}
    cursor: pointer;
    p {
      color: #000099;
    }
  }
  h3 {
    font-size: 1.5rem;
    margin-top: 0;
  }
  p {
    color: #0000ff;
    text-decoration: underline;
  }
`;
const CatagoryBar = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const postsData = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  function getFilteredList() {
    if (!selectedCategory) {
      return postsData;
    }
    return postsData.filter((item) => item.category === selectedCategory);
  }

  const filteredList = useMemo(getFilteredList, [selectedCategory, postsData]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  return (
    <Catagorywrapperr>
      <h3>VIEW CATEGORY</h3>
      <form onChange={handleCategoryChange}>
        <div className="CatagoryInput">
          <select>
            <option value="">All</option>
            <option value="pirate">Pirate</option>
            <option value="cat">Cat</option>
            <option value="hackathon">Hackathon</option>
          </select>
        </div>
      </form>
      <button type="submit">VIEW CATAGORY POSTS</button>
      <div className="sport-list">
        {/* {filteredList.map((element, index) => (
          <Item {...element} key={index} />
        ))} */}
        {(filteredList.map(({ title, text, author, date }) => (
          <CardWrapper>
            <h3>{title}</h3>
            <section>
              {text.slice(0, 100)}...
              {author}
              {date}
              <p>Read More from the post &#39;{title}&#39;...</p>
            </section>
          </CardWrapper>
        )))}
      </div>

      <h3>ADD A CATEGORY</h3>
      <form>
        <div className="CatagoryInput">
          <input
            type="text"
            id="searchTerm"
            placeholder="Catagory Name"
          />
        </div>
        <button type="submit">ADD.. CATAGORY</button>
      </form>
    </Catagorywrapperr>
  );
};

export default CatagoryBar;
