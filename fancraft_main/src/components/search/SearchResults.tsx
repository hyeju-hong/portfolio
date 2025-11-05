import React from 'react';
import { useRecoilValue } from 'recoil';
import { searchState } from '../../recoil/search';
import Gallery from '../common/Gallery';
import './SearchResults.css';

const SearchResults: React.FC = () => {
  const search = useRecoilValue(searchState);

  if (!search.isSearching) return null;

  // TODO: 실제 검색 API 연동
  const mockResults = [
    {
      id: 1,
      image: require('../../assets/img/test1.png'),
      title: '메이플스토리 일러스트',
      description: '메이플스토리 캐릭터 일러스트입니다.',
      likes: 1234,
      views: 5678
    },
    {
      id: 2,
      image: require('../../assets/img/test2.png'),
      title: '리그오브레전드 일러스트',
      description: '리그오브레전드 챔피언 일러스트입니다.',
      likes: 2345,
      views: 6789
    }
  ];

  return (
    <div className="search_results">
      <div className="search_header">
        <h2>검색 결과: "{search.query}"</h2>
        <div className="search_filters">
          <button className={search.category === 'all' ? 'active' : ''}>전체</button>
          <button className={search.category === 'illust' ? 'active' : ''}>일러스트</button>
          <button className={search.category === 'cartoon' ? 'active' : ''}>만화</button>
          <button className={search.category === 'fiction' ? 'active' : ''}>소설</button>
        </div>
      </div>
      <Gallery items={mockResults} />
    </div>
  );
};

export default SearchResults; 