import React from 'react';
import { TagBox } from '../components';
import FictionCard from '../components/FictionCard';
import './Fiction.css';
import testImage from '../assets/img/test4.png';
import testProfile from '../assets/img/test_profile.jpg';
import { useNavigate } from 'react-router-dom';

import fictionImage1 from '../assets/img/fiction_main_img01.png';
import fictionImage2 from '../assets/img/fiction_main_img02.png';
import fictionImage3 from '../assets/img/fiction_main_img03.png';
import fictionImage4 from '../assets/img/fiction_main_img04.png';
import fictionImage5 from '../assets/img/fiction_main_img05.png';
import fictionImage6 from '../assets/img/fiction_main_img06.png';

import profileImage1 from '../assets/img/fiction_profile1.jpg';
import profileImage2 from '../assets/img/fiction_profile2.jpg';
import profileImage3 from '../assets/img/fiction_profile3.jpg';
import profileImage4 from '../assets/img/fiction_profile4.jpg';
import profileImage5 from '../assets/img/fiction_profile5.jpg';
import profileImage6 from '../assets/img/fiction_profile6.jpg';

const Fiction: React.FC = () => {
  const navigate = useNavigate();

  const fictionCardData = [
    {
      id: 1,
      image: fictionImage1,
      title: '붉은 왕좌의 계승자',
      description: '모두가 두려워한 이름, 다시 불타오르다',
      tag: '#던전앤파이터',
      profileImage: profileImage1,
      profileName: '혜수',
      likes: 1200,
      views: 800
    },
    {
      id: 2,
      image: fictionImage2,
      title: '기억의 시작',
      description: '처음으로 손을 잡던 그 순간처럼',
      tag: '#마비노기',
      profileImage: profileImage2,
      profileName: '로떼냥',
      likes: 1500,
      views: 900
    },
    {
      id: 3,
      image: fictionImage3,
      title: '기억의 시작',
      description: '처음으로 손을 잡던 그 순간처럼',
      tag: '#마비노기',
      profileImage: profileImage3,
      profileName: '이세계',
      likes: 1800,
      views: 1000
    },
    {
      id: 4,
      image: fictionImage4,
      title: '루나의 조각',
      description: '달빛 아래, 정령과 함께 하는 소녀의 이야기',
      tag: '#마비노기',
      profileImage: profileImage4,
      profileName: '힐줄랑말랑',
      likes: 2000,
      views: 1100
    },
    {
      id: 5,
      image: fictionImage5,
      title: '너를 지키는 이유',
      description: '장의 한복판에서 피어난 조용한 맹세',
      tag: '#마비노기',
      profileImage: profileImage5,
      profileName: '모나카',
      likes: 1100,
      views: 700
    },
    {
      id: 6,
      image: fictionImage6,
      title: "Neon Skyline: Jett's Domain",
      description: '이 도시는, 그녀의 놀이터다.',
      tag: '#오버워치',
      profileImage: profileImage6,
      profileName: '필드섭체셔씨',
      likes: 1300,
      views: 850
    }
  ];

  const fictionRankingData = [
    {
      id: 1,
      image: fictionImage1,
      title: '루나의 조각',
      description: '달빛 아래, 정령과 함께 하는 소녀의 이야기',
      tag: '#마비노기',
      profileImage: profileImage1,
      profileName: '로떼냥',
      likes: 5000,
      views: 3000
    },
    {
      id: 2,
      image: fictionImage2,
      title: '랭킹 붉은 왕좌의 계승자',
      description: '모두가 두려워한 이름, 다시 불타오르다',
      tag: '#던전앤파이터',
      profileImage: profileImage2,
      profileName: '혜수',
      likes: 4500,
      views: 2800
    }
  ];

  const handleCardClick = (id: number) => {
    navigate(`/fiction/${id}`);
  };

  return (
    <div className="fiction_container">
      <div className="top_header">
        <h2>소설</h2>
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
          <div className="fiction_card_grid">
            {fictionCardData.map((item) => (
              <FictionCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                tag={item.tag}
                author={item.profileName}
                authorAvatar={item.profileImage}
                onClick={() => handleCardClick(item.id)}
              />
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section_header">
            <div className="ranking_title">
              <div className="ranking_sub">데일리 랭킹</div>
              <div className="fiction_ranking_main">인기 소설</div>
            </div>
            <a href="#" className="more_button">
              더보기
            </a>
          </div>
          <div className="fiction_card_grid daily">
            {fictionRankingData.map((item, index) => (
              <FictionCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                tag={item.tag}
                author={item.profileName}
                authorAvatar={item.profileImage}
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

export default Fiction;