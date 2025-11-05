import React, { useState, useEffect } from 'react';
import './Ranking.css';
import { TagBox } from '../components/TagBox';
import { Card } from '../components';

// Import necessary images
import rankingFeaturedImg from '../assets/img/ranking_main_img01.png';
import rankingWorkImg1 from '../assets/img/ranking_main_img02.png';
import rankingWorkImg2 from '../assets/img/ranking_main_img03.png';
import rankingWorkImg3 from '../assets/img/ranking_main_img04.png';
import rankingWorkImg4 from '../assets/img/ranking_main_img05.png';
import rankingWorkImg5 from '../assets/img/ranking_main_img06.png';
import rankingWorkImg6 from '../assets/img/ranking_main_img07.png';
import rankingWorkImg7 from '../assets/img/ranking_main_img08.png';
import rankingWorkImg8 from '../assets/img/ranking_main_img09.png';
import rankingWorkImg9 from '../assets/img/ranking_main_img10.png';

import profileImage1 from '../assets/img/illust_profile1.jpg';
import profileImage2 from '../assets/img/illust_profile2.jpg';
import profileImage3 from '../assets/img/illust_profile3.jpg';
import profileImage4 from '../assets/img/illust_profile4.jpg';
import profileImage5 from '../assets/img/illust_profile5.jpg';
import profileImage6 from '../assets/img/illust_profile6.jpg';
import profileImage7 from '../assets/img/illust_profile7.jpg';
import profileImage8 from '../assets/img/illust_profile8.jpg';
import profileImage9 from '../assets/img/illust_profile1.jpg';

const Ranking: React.FC = () => {
  const rankingData = [
    {
      id: 1,
      image: rankingWorkImg1,
      title: '오버워치 썸머 비치파티',
      description: '랭킹 작품 1 설명입니다.',
      category: '오버워치',
      authorName: '빔은고양이야',
      authorAvatar: profileImage1,
      likes: 1500,
      views: 3500
    },
    {
      id: 2,
      image: rankingWorkImg2,
      title: '브리기테의 여름휴가',
      description: '랭킹 작품 2 설명입니다.',
      category: '오버워치',
      authorName: '블쨩조아헤',
      authorAvatar: profileImage2,
      likes: 1200,
      views: 3000
    },
    {
      id: 3,
      image: rankingWorkImg3,
      title: '대환장 한상차림',
      description: '랭킹 작품 3 설명입니다.',
      category: '오버워치',
      authorName: '솔탱머신',
      authorAvatar: profileImage3,
      likes: 1000,
      views: 2800
    },
    {
      id: 4,
      image: rankingWorkImg4,
      title: '정신차려',
      description: '랭킹 작품 4 설명입니다.',
      category: '오버워치',
      authorName: '잠깐만탸임',
      authorAvatar: profileImage4,
      likes: 900,
      views: 2500
    },
    {
      id: 5,
      image: rankingWorkImg5,
      title: '옵치결혼식',
      description: '랭킹 작품 5 설명입니다.',
      category: '오버워치',
      authorName: '햎딩이좋아요',
      authorAvatar: profileImage5,
      likes: 800,
      views: 2200
    },
    {
      id: 6,
      image: rankingWorkImg6,
      title: '옵치짧게',
      description: '랭킹 작품 6 설명입니다.',
      category: '오버워치',
      authorName: '옵치하세요다들6',
      authorAvatar: profileImage6,
      likes: 700,
      views: 2000
    },
    {
      id: 7,
      image: rankingWorkImg7,
      title: '나도껴줘',
      description: '랭킹 작품 7 설명입니다.',
      category: '오버워치',
      authorName: '우땨땨니땨',
      authorAvatar: profileImage7,
      likes: 600,
      views: 1800
    },
    {
      id: 8,
      image: rankingWorkImg8,
      title: '워터파크 보안관',
      description: '랭킹 작품 8 설명입니다.',
      category: '오버워치',
      authorName: '즥쮝쯱',
      authorAvatar: profileImage8,
      likes: 500,
      views: 1600
    },
    {
      id: 9,
      image: rankingWorkImg9,
      title: '옵치벽쿵',
      description: '랭킹 작품 9 설명입니다.',
      category: '오버워치',
      authorName: '저안에사람이',
      authorAvatar: profileImage9,
      likes: 400,
      views: 1400
    }
  ];

  const handleCardClick = (id: number) => {
    console.log(`Ranking Card clicked: ${id}`);
    // Add your navigation or other logic here
  };

  // 모바일 여부 체크 상태 및 로직 추가
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="ranking_container">
      <div className="ranking_top_header">
        <h2>랭킹</h2>
        <div className="ranking_header_categories">
          <a href="#" className="active">전체</a>
          <a href="#">일러스트</a>
          <a href="#">만화</a>
          <a href="#">소설</a>
        </div>
        <div className="tag_box_wrap">
          <TagBox title="#메이플스토리" />
          <TagBox title="#리그오브레전드" />
          <TagBox title="#오버워치" />
          <TagBox title="#블루아카이브" />
          <TagBox title="#테일즈런너" />
          <TagBox title="더보기" />
        </div>
      </div>

      <div className="ranking_main">
        {/* 1위 하이라이트 */}
        {isMobile ? (
          <div className="ranking_mobile_featured_title">
            <span className="ranking_number_mobile">1위</span>
            <span className="ranking_title_mobile">{rankingData[0].title}</span>
          </div>
        ) : (
          <div className="ranking_top_section">
            <div className="ranking_featured_card">
              <div className="ranking_featured_left">
                <div className="ranking_featured_image">
                  <img
                    src={rankingFeaturedImg}
                    alt="랭킹 1위 작품"
                  />
                </div>
                <div className="ranking_featured_info">
                  <div className="ranking_featured_title">{rankingData[0].title}</div>
                  <div className="ranking_featured_tags">
                    <span className="ranking_tag">{rankingData[0].category}</span>
                    {/* Add more tags if needed */}
                  </div>
                  <div className="ranking_featured_author">
                    <div className="ranking_author_avatar" style={{ backgroundImage: `url(${rankingData[0].authorAvatar})` }}></div>
                    <span className="ranking_author_name">{rankingData[0].authorName}</span>
                  </div>
                  <div className="ranking_featured_stats">
                    <div className="ranking_stat_item">
                      <i className="fa-solid fa-eye"></i>
                      <span>{rankingData[0].views}</span>
                    </div>
                    <div className="ranking_stat_item">
                      <i className="fa-solid fa-heart"></i>
                      <span>{rankingData[0].likes}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ranking_featured_right">
                <div className="ranking_number">1위</div>
                <div className="ranking_featured_title_right">{rankingData[0].title}</div>
              </div>
            </div>
          </div>
        )}

        {/* 작품 그리드 */}
        <div className="ranking_works_grid">
          {rankingData.map((item, index) => (
            <div key={item.id} className="ranking_work_card">
              <div className="ranking_work_image">
                <img
                  src={item.image}
                  alt={`랭킹 작품 ${item.id}`}
                />
              </div>
              <div className="ranking_work_content">
                <div className="ranking_work_category">{item.category}</div>
                <div className="ranking_work_title">{item.title}</div>
                <div className="ranking_work_author">
                  <div className="ranking_work_author_avatar" style={{ backgroundImage: `url(${item.authorAvatar})` }}></div>
                  <span className="ranking_work_author_name">{item.authorName}</span>
                </div>
                <div className="ranking_work_stats">
                  <div className="ranking_work_stat">
                    <i className="fa-solid fa-eye"></i>
                    <span>{item.views}</span>
                  </div>
                  <div className="ranking_work_stat">
                    <i className="fa-solid fa-heart"></i>
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="ranking_pagination">
          <a href="#">‹</a>
          <a href="#" className="active">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">›</a>
        </div>
      </div>
    </div>
  );
};

export default Ranking; 