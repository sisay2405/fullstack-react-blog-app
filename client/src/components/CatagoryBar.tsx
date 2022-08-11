/* eslint no-underscore-dangle: 0 */
import React, { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../types/hooks';
import { setSelectedCategory } from '../store/postSlice';
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
// type SelectCategoryProps = {
//   selectedCategories: string;
//   categoryType: string;
//   // category: string;
//   id: number;
// };
const CatagoryBar = () => {
  const [selectedCategories, setSelectedCategoryies] = useState('');
  const [addcatago, setAddCatgo] = useState('');
  const catgoryData = useAppSelector((state) => state.categories.value);
  const reload = useAppSelector((state) => state.categories.reload);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCatagory());
  }, [reload]);

  const submitAddCategory = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addCatagory(addcatago));
  };
  const onChangeAddCatagry = (e: ChangeEvent<HTMLInputElement>) => {
    setAddCatgo(e.target.value);
  };
  function handleCategoryChange(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(setSelectedCategory(selectedCategories));
  }

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategoryies(e.target.value);
  };

  return (
    <Catagorywrapperr>
      <h3>VIEW CATEGORY</h3>
      <form onSubmit={handleCategoryChange}>
        <div>
          <select className="viewCatagoryPost" onChange={handleOnChange}>
            <option value="all">All</option>
            {catgoryData && catgoryData.map((item) => {
              return <option key={item._id}> {item.categoryType}</option>;
            })}
          </select>
        </div>
        <button className="CatagoryPostButton" type="submit">VIEW CATAGORY POSTS</button>
      </form>
      <h3>ADD A CATEGORY</h3>
      <form onSubmit={submitAddCategory}>
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
