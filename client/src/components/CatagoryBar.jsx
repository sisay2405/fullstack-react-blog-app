import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import styled from 'styled-components';
import { getPosts, setSelectedCategory } from '../store/postSlice';
import { addCatagory, getCatagory } from '../store/categorySlice';
import { lighten } from '../utils/styleMethods';

const Catagorywrapperr = styled.footer`
  color: #fefefe;
  padding: 1rem 0;
  margin-left: 100px;
  text-align: center;
  .CatagoryInput{
    width: 400px;
  }
  button {
    margin: 0.25rem 0;
    width: 300px;
  }
  h3{
    color:black;
  }
`;
const CardWrapper = styled.article`
width:300px;
  border: 1px solid lightgray;
  border-radius: 10px;
  // margin-bottom: 1rem;
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
  const catgoryData = useSelector((state) => state.categories.value);
  const reload = useSelector((state) => state.categories.reload);

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
        <div className="CatagoryInput">
          <select onChange={handleOnChange}>
            {catgoryData && catgoryData.map((item) => {
              return <option key={item.id}> {item.categoryType}</option>;
            })}
          </select>
        </div>
        <button type="submit">VIEW CATAGORY POSTS</button>
      </form>
      <h3>ADD A CATEGORY</h3>
      <form onSubmit={submitAddCatag}>
        <div className="CatagoryInput">
          <input
            type="text"
            value={addcatago}
            placeholder="Catagory Name"
            onChange={onChangeAddCatagry}
          />
        </div>
        <button type="submit">ADD.. CATAGORY</button>
      </form>
    </Catagorywrapperr>
  );
};

export default CatagoryBar;
