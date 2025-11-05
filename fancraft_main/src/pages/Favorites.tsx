import React from 'react';
import Gallery from '../components/common/Gallery';
import './Favorites.css';

const Favorites: React.FC = () => {
  // TODO: 실제 데이터로 교체
  const mockItems = [
    {
      id: 1,
      image: require('../assets/img/test1.png'),
      title: '메이플스토리 일러스트',
      description: '메이플스토리 캐릭터 일러스트입니다.',
      likes: 1234,
      views: 5678
    },
    {
      id: 2,
      image: require('../assets/img/test2.png'),
      title: '리그오브레전드 일러스트',
      description: '리그오브레전드 챔피언 일러스트입니다.',
      likes: 2345,
      views: 6789
    }
  ];

  return (
    <div className="favorites">
      <div className="favorites_header">
        <h1>즐겨찾기</h1>
        <div className="favorites_filters">
          <button className="active">전체</button>
          <button>일러스트</button>
          <button>만화</button>
          <button>소설</button>
        </div>
      </div>
      <Gallery items={mockItems} />
    </div>
  );
};

export default Favorites; 