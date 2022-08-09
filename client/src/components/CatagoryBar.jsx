/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { getPosts, setSelectedCategory } from '../store/postSlice';
import { addCatagory, getCatagory } from '../store/categorySlice';
import { lighten } from '../utils/styleMethods';

const Catagorywrapperr = styled.footer`
  color: #fefefe;
  padding: 1rem 5rem;
  text-align: center;
  h3{
    color:black;
  }
  .CatagoryPostButton{
    color: white;
    background: #2dbeeb;
    border-radius: 3px;
    margin: 0.25rem 0;
    width: 250px;
  }
  .viewCatagoryPost{
    border-radius: 3px;
    margin: 0.25rem 0;
    width: 250px;
  }
`;
const CardWrapper = styled.article`
width:300px;
  border: 1px solid lightgray;
  border-radius: 10px;
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
  const [selectedCategoryed, setSelectedCategoryed] = useState('all');
  const [addcatago, setAddCatgo] = useState('');
  const catgoryData = useSelector((state) => state.categories.value, shallowEqual);
  const reload = useSelector((state) => state.categories.reload, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatagory());
  }, [reload]);

  const submitAddCatag = (event) => {
    event.preventDefault();
    dispatch(addCatagory(addcatago));
  };
  const onChangeAddCatagry = (e) => {
    setAddCatgo(e.target.value);
  };
  function handleCategoryChange(event) {
    event.preventDefault();
    dispatch(setSelectedCategory(selectedCategoryed));
  }

  const handleOnChange = (e) => {
    setSelectedCategoryed(e.target.value);
  };

  return (
    <Catagorywrapperr>
      <h3>VIEW CATEGORY</h3>
      <form onSubmit={handleCategoryChange}>
        <div>
          <select className="viewCatagoryPost" onChange={handleOnChange}>
            <option value="all">All</option>
            {catgoryData && catgoryData.map((item) => {
              return <option key={item.id}> {item.categoryType}</option>;
            })}
          </select>
        </div>
        <button className="CatagoryPostButton" type="submit">VIEW CATAGORY POSTS</button>
      </form>
      <h3>ADD A CATEGORY</h3>
      <form onSubmit={submitAddCatag}>
        <div>
          <input
            className="viewCatagoryPost"
            type="text"
            value={addcatago}
            placeholder="Catagory Name"
            onChange={onChangeAddCatagry}
          />
        </div>
        <button className="CatagoryPostButton" type="submit">ADD CATAGORY</button>
      </form>
    </Catagorywrapperr>
  );
};

export default CatagoryBar;
