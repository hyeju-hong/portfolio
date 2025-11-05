import React from 'react';
import { Card, TagBox } from '../components';
import './Cartoon.css';
import testProfile from '../assets/img/test_profile.jpg';
import profile1 from '../assets/img/cartoon_profile1.jpg';
import profile2 from '../assets/img/cartoon_profile2.jpg';
import profile3 from '../assets/img/cartoon_profile3.jpg';
import profile4 from '../assets/img/cartoon_profile4.jpg';
import profile5 from '../assets/img/cartoon_profile5.jpg';
import profile6 from '../assets/img/cartoon_profile6.jpg';
import profile7 from '../assets/img/cartoon_profile7.jpg';
import profile8 from '../assets/img/cartoon_profile8.jpg';
import { useNavigate } from 'react-router-dom';

const Cartoon: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    console.log(`Card clicked: ${id}`);
    navigate(`/cartoon/${id}`);
  };

  // 카드 데이터
  const cardData = [
    {
      id: 1,
      image: require('../assets/img/cartoon_main_img01.png'),
      title: '루미야 너는 세금두배내라',
      description: "이것도너프해보시지",
      likes: 1200,
      views: 3400,
      profileName: 'PING',
      profileImage: profile1,
      tags: ['#오버워치', '#단편']
    },
    {
      id: 2,
      image: require('../assets/img/cartoon_main_img02.png'),
      title: '커플링',
      description: '커플링단편',
      likes: 892,
      views: 2100,
      profileName: '뺩씨',
      profileImage: profile2,
      tags: ['#메이플스토리', '#로맨스']
    },
    {
      id: 3,
      image: require('../assets/img/cartoon_main_img03.png'),
      title: '너프해보시지',
      description: '디바에 상향요청ㅋㅋ',
      likes: 2300,
      views: 5700,
      profileName: '백금백이진리지요',
      profileImage: profile3,
      tags: ['#메이플스토리', '#개그']
    },
    {
      id: 4,
      image: require('../assets/img/cartoon_main_img04.png'),
      title: '옵치결혼식',
      description: '너넨 결혼해라~',
      likes: 654,
      views: 1800,
      profileName: '햎딩이좋아요',
      profileImage: profile4,
      tags: ['#오버워치', '#로맨스']
    },
    {
      id: 5,
      image: require('../assets/img/cartoon_main_img05.png'),
      title: '아리귀여워',
      description: '제가 좋아하는 아리로 그려봣어용',
      likes: 3100,
      views: 7200,
      profileName: '넨네님',
      profileImage: profile5,
      tags: ['#리그오브레전드']
    },
    {
      id: 6,
      image: require('../assets/img/cartoon_main_img06.png'),
      title: '옵치영문',
      description: '짧아요 영문버전없어서 만들어봄',
      likes: 421,
      views: 989,
      profileName: '옵치하세요다들',
      profileImage: profile6,
      tags: ['#오버워치', '#단편']
    },
    {
      id: 7,
      image: require('../assets/img/cartoon_main_img07.png'),
      title: '서른다섯이라고?',
      description: '메이코패스 빡치지만..;',
      likes: 1700,
      views: 4100,
      profileName: '겐지장인이코스',
      profileImage: profile7,
      tags: ['#오버워치', '단편']
    },
    {
      id: 8,
      image: require('../assets/img/cartoon_main_img08.png'),
      title: '메이플 장편 1',
      description: '매주 월요일 올라갑니다!',
      likes: 892,
      views: 2300,
      profileName: '뽀코팡',
      profileImage: profile8,
      tags: ['#메이플스토리', '#장편']
    }
  ];

  // 랭킹 데이터
  const rankingData = [
    {
      id: 1,
      image: require('../assets/img/cartoon_main_img09.png'),
      title: '커플링',
      description: '커플링단편',
      likes: 5000,
      views: 12000,
      profileName: '뺩씨',
      profileImage: profile1,
      tags: ['#오버워치', '#랭킹1위']
    },
    {
      id: 2,
      image: require('../assets/img/cartoon_main_img10.png'),
      title: '아리귀여워',
      description: '제가 좋아하는 아리로 그려봣어용',
      likes: 4500,
      views: 10000,
      profileName: '넨네님',
      profileImage: profile2,
      tags: ['#리그오브레전드', '#랭킹2위']
    },
    {
      id: 3,
      image: require('../assets/img/cartoon_main_img11.png'),
      title: '메이플_단편 뭐왜',
      description: '3개가 끝!',
      likes: 4000,
      views: 9000,
      profileName: '달디단밤양갱갱갱',
      profileImage: profile3,
      tags: ['#메이플스토리', '#랭킹3위']
    },
    {
      id: 4,
      image: require('../assets/img/cartoon_main_img12.png'),
      title: '옵치결혼식',
      description: '너넨 결혼해라~',
      likes: 3500,
      views: 8000,
      profileName: '햎딩이좋아요',
      profileImage: profile4,
      tags: ['#오버워치', '#랭킹4위']
    }
  ];

  return (
    <div className="cartoon_container">
      <div className="top_header">
        <h2>만화</h2>
        <div className="tag_box_wrap">
          <TagBox title="#메이플스토리" />
          <TagBox title="#리그오브레전드" />
          <TagBox title="#오버워치" />
          <TagBox title="#블루아카이브" />
          <TagBox title="#테일즈런너" />
          <TagBox title="더보기" />
        </div>
      </div>
      <div className="main">
        <div className="section">
          <div className="section_header">
            <div className="section_title">추천작품</div>
            <a href="#" className="more_button">
              더보기
            </a>
          </div>
          <div className="card_grid">
            {cardData.map((item) => (
              <Card
                key={item.id}
                $imageUrl={item.image}
                $profileImageUrl={item.profileImage}
                title={item.title}
                description={item.description}
                likes={item.likes}
                views={item.views}
                profileName={item.profileName}
                tags={item.tags}
                onClick={() => handleCardClick(item.id)}
              />
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section_header">
            <div className="ranking_title">
              <div className="ranking_sub">데일리 랭킹</div>
              <div className="cartoon_ranking_main">인기 만화</div>
            </div>
            <a href="#" className="more_button">
              더보기
            </a>
          </div>
          <div className="card_grid daily">
            {rankingData.map((item, index) => (
              <Card
                key={item.id}
                $imageUrl={item.image}
                $profileImageUrl={item.profileImage}
                title={item.title}
                description={item.description}
                likes={item.likes}
                views={item.views}
                profileName={item.profileName}
                tags={item.tags}
                onClick={() => handleCardClick(item.id)}
              />
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section_header">
            <div className="section_title">인기태그</div>
            <a href="#" className="more_button">
              더보기
            </a>
          </div>
          <div className="card_grid tags">
            <div className="tag_card">
              <div className="tag_card_title">메이플스토리</div>
            </div>
            <div className="tag_card">
              <div className="tag_card_title">던전앤파이터</div>
            </div>
            <div className="tag_card">
              <div className="tag_card_title">오버워치</div>
            </div>
            <div className="tag_card">
              <div className="tag_card_title">리그오브레전드</div>
            </div>
            <div className="tag_card">
              <div className="tag_card_title">로스트아크</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartoon; 