import React, { useState, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { searchState } from '../../recoil/search';
import './SearchBar.css';

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const setSearch = useSetRecoilState(searchState);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setSearch(prev => ({
      ...prev,
      query: inputValue.trim(),
      isSearching: true
    }));
  }, [inputValue, setSearch]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <form className="search_bar" onSubmit={handleSearch}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="작품을 검색하세요."
      />
      <button type="submit">검색</button>
    </form>
  );
};

export default SearchBar; 