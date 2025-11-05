import React from 'react';
import { Card, TagBox } from '../components';
import './Illust.css';
import { useNavigate } from 'react-router-dom';
import testProfile from '../assets/img/test_profile.jpg';
import profile1 from '../assets/img/illust_profile1.jpg';
import profile2 from '../assets/img/illust_profile2.jpg';
import profile3 from '../assets/img/illust_profile3.jpg';
import profile4 from '../assets/img/illust_profile4.jpg';
import profile5 from '../assets/img/illust_profile5.jpg';
import profile6 from '../assets/img/illust_profile6.jpg';
import profile7 from '../assets/img/illust_profile7.jpg';
import profile8 from '../assets/img/illust_profile8.jpg';

const Illust: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    console.log(`Card clicked: ${id}`);
    navigate(`/illust/${id}`);
  };

  // 카드 데이터
  const cardData = [
    {
      id: 1,
      image: require('../assets/img/illust_main_img02.png'),
      title: '오버워치 썸머 비치 파티!',
      description: "이번 테마는 '여름 물 놀이'으로 그렸어요. 여러분도 시원한 여름 보내길~ ",
      likes: 1200,
      views: 3400,
      profileName: '빔은고양이야',
      profileImage: profile1,
      tags: ['#오버워치']
    },
    {
      id: 2,
      image: require('../assets/img/illust_main_img03.png'),
      title: '브리기테, 여름을 배워가는 중',
      description: '애정 가득 담았어요. 소중히 감상해 주세요!',
      likes: 892,
      views: 2100,
      profileName: '고양이냥냥냥',
      profileImage: profile2,
      tags: ['#오버워치']
    },
    {
      id: 3,
      image: require('../assets/img/illust_main_img04.png'),
      title: '차가운 검, 뜨거운 신념',
      description: '복 많이 받으세요! 새해 인사 드립니다 :)',
      likes: 2300,
      views: 5700,
      profileName: '미소년킬러',
      profileImage: profile3,
      tags: ['#오버워치']
    },
    {
      id: 4,
      image: require('../assets/img/illust_main_img05.png'),
      title: '벚꽃 아래 별의 기도',
      description: '더운 하루, 오버워치 팀과 함께 떠난 가상의 여름 바캉스',
      likes: 654,
      views: 1800,
      profileName: '백금은세계를구해',
      profileImage: profile4,
      tags: ['#오버워치']
    },
    {
      id: 5,
      image: require('../assets/img/illust_main_img06.png'),
      title: '듀얼 엘리멘트',
      description: '이 여름, 게임 속에서 피어난 또 하나의 추억을 팬아트로 남깁니다.',
      likes: 3100,
      views: 7200,
      profileName: '데블린의악마',
      profileImage: profile5,
      tags: ['#오버워치']
    },
    {
      id: 6,
      image: require('../assets/img/illust_main_img07.png'),
      title: 'High Noon',
      description: '처음 만났을 때의 설렘을 잊지 못해, 팬아트로 그려봅니다',
      likes: 421,
      views: 989,
      profileName: '븙샤',
      profileImage: profile6,
      tags: ['#발로란트']
    },
    {
      id: 7,
      image: require('../assets/img/illust_main_img08.png'),
      title: 'Blue Trigger',
      description: '드디어 그려보고싶었떤...',
      likes: 1700,
      views: 4100,
      profileName: '버네나버네',
      profileImage: profile7,
      tags: ['#리그오브레전드']
    },
    {
      id: 8,
      image: require('../assets/img/illust_main_img09.png'),
      title: '빛과 그림자의 서약',
      description: '이 캐릭터가 없었다면 지금의 나는 없었을지도 몰라요',
      likes: 892,
      views: 2300,
      profileName: '엔젤릭쌉고수',
      profileImage: profile8,
      tags: ['#던전앤파이터']
    }
  ];

  // 랭킹 데이터
  const rankingData = [
    {
      id: 1,
      image: require('../assets/img/illust_main_img10.png'),
      title: '듀얼 엘리멘트',
      description: '이 여름, 게임 속에서 피어난 또 하나의 추억을 팬아트로 남깁니다.',
      likes: 5000,
      views: 12000,
      profileName: '데블린의악마',
      profileImage: profile1,
      tags: ['#오버워치', '#랭킹1위']
    },
    {
      id: 2,
      image: require('../assets/img/illust_main_img11.png'),
      title: 'Blue Trigger',
      description: '드디어 그려보고싶었떤...',
      likes: 4500,
      views: 10000,
      profileName: '버네나버네',
      profileImage: profile2,
      tags: ['#리그오브레전드', '#랭킹2위']
    },
    {
      id: 3,
      image: require('../assets/img/illust_main_img01.png'),
      title: '브리기테, 여름을 배워가는 중',
      description: '애정 가득 담았어요. 소중히 감상해 주세요!',
      likes: 4000,
      views: 9000,
      profileName: '고양이냥냥냥',
      profileImage: profile3,
      tags: ['#메이플스토리', '#랭킹3위']
    },
    {
      id: 4,
      image: require('../assets/img/illust_main_img12.png'),
      title: 'High Noon',
      description: '처음 만났을 때의 설렘을 잊지 못해, 팬아트로 그려봅니다',
      likes: 3500,
      views: 8000,
      profileName: '븙샤',
      profileImage: profile4,
      tags: ['#발로란트', '#랭킹4위']
    }
  ];

  return (
    <div className="illust_container">
      <div className="top_header">
        <h2>일러스트</h2>
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
              <div className="illust_ranking_main">인기 일러스트</div>
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

export default Illust; 