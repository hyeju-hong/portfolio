import React from 'react';
import { TagBox } from '../components';
import ContestCard from '../components/ContestCard';
import './Contest.css';

import contestImage1 from '../assets/img/contest_main_img01.png';
import contestImage2 from '../assets/img/contest_main_img02.png';
import contestImage3 from '../assets/img/contest_main_img03.png';
import contestImage4 from '../assets/img/contest_main_img04.png';

import profileImage1 from '../assets/img/illust_profile7.jpg';
import profileImage2 from '../assets/img/illust_profile3.jpg';

const Contest: React.FC = () => {
  const mockContests = [
    {
      id: 1,
      image: contestImage1,
      title: '2025 여름 장마 콘테스트',
      author: '픽셀퀘스트 챌린지',
      authorAvatar: profileImage1,
      link: '/contest/1'
    },
    {
      id: 2,
      image: contestImage2,
      title: '2025 설맞이 콘테스트',
      author: '판타지프레임',
      authorAvatar: profileImage2,
      link: '/contest/2'
    },
    {
      id: 3,
      image: contestImage3,
      title: '2025 영혼의 꽃 콘테스트',
      author: '전설제작',
      authorAvatar: profileImage1,
      link: '/contest/3'
    },
    {
      id: 4,
      image: contestImage4,
      title: '2025 동물특공대 콘테스트',
      author: '퀘스트잉크 ',
      authorAvatar: profileImage2,
      link: '/contest/4'
    }
    
  ];

  return (
    <div className="contest_container">
      <div className="contest_top_header">
        <h2>콘테스트</h2>
        <div className="contest_tag_box_wrap">
          <TagBox title="#메이플스토리" />
          <TagBox title="#리그오브레전드" />
          <TagBox title="#오버워치" />
          <TagBox title="#블루아카이브" />
          <TagBox title="#테일즈런너" />
          <TagBox title="더보기" />
        </div>
      </div>
      <div className="contest_main">
        {/* 전체 콘테스트 섹션 */}
        <div className="contest_section">
          <div className="contest_section_header">
            <h3 className="contest_section_title">전체 콘테스트</h3>
          </div>
          <div className="contest_list">
            {mockContests.map((contest) => (
              <ContestCard
                key={contest.id}
                image={contest.image}
                title={contest.title}
                author={contest.author}
                authorAvatar={contest.authorAvatar}
                link={contest.link}
              />
            ))}
          </div>
        </div>

        {/* 최신 콘테스트 섹션 */}
        <div className="contest_section">
          <div className="contest_section_header">
            <h3 className="contest_section_title">최신 콘테스트</h3>
          </div>
          <div className="contest_list">
            {mockContests.slice(0, 2).map((contest) => (
              <ContestCard
                key={contest.id}
                image={contest.image}
                title={contest.title}
                author={contest.author}
                authorAvatar={contest.authorAvatar}
                link={contest.link}
              />
            ))}
          </div>
        </div>

        {/* 마감임박 콘테스트 섹션 */}
        <div className="contest_section">
          <div className="contest_section_header">
            <h3 className="contest_section_title">마감임박 콘테스트</h3>
          </div>
          <div className="contest_list">
            {mockContests.slice(2, 4).map((contest) => (
              <ContestCard
                key={contest.id}
                image={contest.image}
                title={contest.title}
                author={contest.author}
                authorAvatar={contest.authorAvatar}
                link={contest.link}
              />
            ))}
          </div>
        </div>

        {/* 페이지네이션 */}
        <div className="contest_pagination">
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

export default Contest; 