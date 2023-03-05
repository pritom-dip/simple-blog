import Input from '../Common/Input';
import SearchIcon from '@/assets/images/search.png';
import { useCallback, useState } from 'react';
import _debounce from 'lodash/debounce';
import { useDispatch, useSelector } from 'react-redux';
import { filterArticle } from '@/redux/slices/articleSlice';

const Search = () => {
  const [inputText, setInputText] = useState('');

  const dispatch = useDispatch();

  const handleDebounceFn = (text: string) => {
    dispatch(filterArticle(text));
  };
  const debounceFn = useCallback(_debounce(handleDebounceFn, 1000), []);

  const handleChange = (text: string) => {
    setInputText(text);
    debounceFn(text);
  };

  return (
    <div>
      <Input
        name="search"
        value={inputText}
        handleChange={handleChange}
        icon={SearchIcon}
        type="text"
        placeholder="Search by Category or Tag"
      />
    </div>
  );
};

export default Search;
