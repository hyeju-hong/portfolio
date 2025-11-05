import React from 'react';
import { TagBox } from '../components';
import './Heart.css';

import heartItemImage1 from '../assets/img/heart_main_01.png';
import heartItemImage2 from '../assets/img/heart_main_02.png';
import heartItemImage3 from '../assets/img/heart_main_03.png';
import heartItemImage4 from '../assets/img/heart_main_04.png';
import heartItemImage5 from '../assets/img/heart_main_05.png';
import heartItemImage6 from '../assets/img/heart_main_06.png';
import heartItemImage7 from '../assets/img/heart_main_07.png';
import heartItemImage8 from '../assets/img/heart_main_08.png';
import heartItemImage9 from '../assets/img/heart_main_09.png';
import heartItemImage10 from '../assets/img/heart_main_10.png';
import heartItemImage11 from '../assets/img/heart_main_11.png';
import heartItemImage12 from '../assets/img/heart_main_12.png';

import profileImage1 from '../assets/img/cartoon_profile1.jpg';
import profileImage2 from '../assets/img/cartoon_profile2.jpg';
import profileImage3 from '../assets/img/cartoon_profile3.jpg';
import profileImage4 from '../assets/img/cartoon_profile4.jpg';
import profileImage5 from '../assets/img/cartoon_profile5.jpg';
import profileImage6 from '../assets/img/cartoon_profile6.jpg';
import profileImage7 from '../assets/img/illust_profile1.jpg';
import profileImage8 from '../assets/img/illust_profile2.jpg';
import profileImage9 from '../assets/img/illust_profile3.jpg';
import profileImage10 from '../assets/img/illust_profile4.jpg';
import profileImage11 from '../assets/img/illust_profile5.jpg';
import profileImage12 from '../assets/img/illust_profile6.jpg';

const Heart: React.FC = () => {
  const mockItems = [
    {
      id: 1,
      image: heartItemImage1,
      title: '이것도너프해보시지',
      author: 'PING',
      authorAvatar: profileImage1
    },
    {
      id: 2,
      image: heartItemImage2,
      title: '커플링단편',
      author: '뺩씨',
      authorAvatar: profileImage2
    },
    {
      id: 3,
      image: heartItemImage3,
      title: '루미야 너는 세금두배내라',
      author: '백금백이진리지요',
      authorAvatar: profileImage3
    },
    {
      id: 4,
      image: heartItemImage4,
      title: '옵치결혼식',
      author: '햎딩이좋아요',
      authorAvatar: profileImage4
    },
    {
      id: 5,
      image: heartItemImage5,
      title: '아리귀여워',
      author: '넨네님',
      authorAvatar: profileImage5
    },
    {
      id: 6,
      image: heartItemImage6,
      title: '옵치짧게',
      author: '옵치하세요다들',
      authorAvatar: profileImage6
    },
    {
      id: 7,
      image: heartItemImage7,
      title: '겐지장인이코스',
      author: '달디단밤양갱갱갱',
      authorAvatar: profileImage7
    },
    {
      id: 8,
      image: heartItemImage8,
      title: '뽀코팡',
      author: '아티스트 8',
      authorAvatar: profileImage8
    },
    {
      id: 9,
      image: heartItemImage9,
      title: '뭐 왜?',
      author: '와샌즈아세요',
      authorAvatar: profileImage9
    },
    {
      id: 10,
      image: heartItemImage10,
      title: '짧게',
      author: '티모맘미메묘',
      authorAvatar: profileImage10
    },
    {
      id: 11,
      image: heartItemImage11,
      title: '뽀삐니?',
      author: '뱌니뱌니댱근댱근',
      authorAvatar: profileImage11
    },
    {
      id: 12,
      image: heartItemImage12,
      title: '3.1415926535',
      author: '이세계',
      authorAvatar: profileImage12
    }
  ];

  return (
    <div className="heart_container">
      <div className="heart_top_header">
        <h2>찜한 작품</h2>
        <div className="heart_tag_box_wrap">
          <TagBox title="#메이플스토리" />
          <TagBox title="#리그오브레전드" />
          <TagBox title="#오버워치" />
          <TagBox title="#블루아카이브" />
          <TagBox title="#테일즈런너" />
          <TagBox title="더보기" />
        </div>
      </div>

      <div className="heart_main">
        <div className="heart_section">
          <div className="heart_card_grid">
            {mockItems.map((item) => (
              <div key={item.id} className="heart_card">
                <div 
                  className="heart_card_image" 
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="heart_card_content">
                  <div className="heart_card_title">{item.title}</div>
                  <div className="heart_card_author">
                    <div 
                      className="heart_author_avatar" 
                      style={{ backgroundImage: `url(${item.authorAvatar})` }}
                    ></div>
                    <span>{item.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heart; 