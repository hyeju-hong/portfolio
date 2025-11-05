import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';
import HomeCard from '../components/HomeCard';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(false);
  const navigate = useNavigate();

  // 챗봇 상태 관리를 위한 state 추가
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // 챗봇 아이콘 클릭 핸들러
  const handleChatbotIconClick = () => {
    if (isChatbotOpen) {
      // 챗봇 닫기
      if ((window as any).chatbase && (window as any).chatbase.close) {
        (window as any).chatbase.close();
      }
      setIsChatbotOpen(false);
    } else {
      // 챗봇 열기
      if ((window as any).chatbase && (window as any).chatbase.open) {
        (window as any).chatbase.open();
      }
      setIsChatbotOpen(true);
    }
  };

  // 카드 클릭 핸들러 추가
  const handleCardClick = () => {
    navigate('/illust/1');
  };

  const breakpointColumns = {
    default: 5,
    1600: 4,
    1200: 3,
    900: 2,
    600: 1
  };

  // 카드 데이터 배열
  const cardData = [
    {
      id: 1,
      image: require('../assets/img/home_img1.png'),
      title: '오버워치',
      description: "이번 테마는 '여름 물 놀이'으로 그렸어요. 여러분도 시원한 여름 보내길~ ",
      likes: 1200,
      views: 3400
    },
    {
      id: 2,
      image: require('../assets/img/home_img2.png'),
      title: '오버워치',
      description: '애정 가득 담았어요. 소중히 감상해 주세요!',
      likes: 892,
      views: 2100
    },
    {
      id: 3,
      image: require('../assets/img/home_img3.png'),
      title: '오버워치',
      description: '복 많이 받으세요! 새해 인사 드립니다 :)',
      likes: 2300,
      views: 5700
    },
    {
      id: 4,
      image: require('../assets/img/home_img4.png'),
      title: '오버워치',
      description: '더운 하루, 오버워치 팀과 함께 떠난 가상의 여름 바캉스',
      likes: 654,
      views: 1800
    },
    {
      id: 5,
      image: require('../assets/img/home_img5.png'),
      title: '오버워치',
      description: '이 여름, 게임 속에서 피어난 또 하나의 추억을 팬아트로 남깁니다.',
      likes: 3100,
      views: 7200
    },
    {
      id: 6,
      image: require('../assets/img/home_img6.png'),
      title: '발로란트',
      description: '처음 만났을 때의 설렘을 잊지 못해, 팬아트로 그려봅니다',
      likes: 421,
      views: 989
    },
    {
      id: 7,
      image: require('../assets/img/home_img7.png'),
      title: '발로란트',
      description: '너무 귀엽지 않나여~~?',
      likes: 1700,
      views: 4100
    },
    {
      id: 8,
      image: require('../assets/img/home_img8.png'),
      title: '던전앤파이터',
      description: '이 캐릭터가 없었다면 지금의 나는 없었을지도 몰라요',
      likes: 892,
      views: 2300
    },
    {
      id: 9,
      image: require('../assets/img/home_img9.png'),
      title: '메이플스토리',
      description: '팬심은 시간이 지나도 퇴색되지 않네요. 이번에도 진심을 담았습니다',
      likes: 2800,
      views: 6500
    },
    {
      id: 10,
      image: require('../assets/img/home_img10.png'),
      title: '메이플스토리',
      description: '겨울이 그리워서 ㅎ',
      likes: 1500,
      views: 3700
    },
    {
      id: 11,
      image: require('../assets/img/home_img11.png'),
      title: '오버워치',
      description: '이번에는, 일러가 아니라 한 편의 이야기로 그려낸 팬픽션이에요',
      likes: 567,
      views: 1200
    },
    {
      id: 12,
      image: require('../assets/img/home_img12.png'),
      title: '메이플스토리',
      description: '마치 이 캐릭터가 웹툰 주인공이라면… 그렇게 시작된 상상입니다',
      likes: 2100,
      views: 4800
    },
    {
      id: 13,
      image: require('../assets/img/home_img13.png'),
      title: '리그 오브 레전드',
      description: '강인함과 섬세함을 동시에 표현해보고 싶었습니다.',
      likes: 3200,
      views: 7800
    },
    {
      id: 14,
      image: require('../assets/img/home_img14.png'),
      title: '던전앤파이터',
      description: '이 장면이 웹툰이었다면, 그들의 표정은 이렇게 그려졌을 거예요',
      likes: 890,
      views: 2100
    },
    {
      id: 15,
      image: require('../assets/img/home_img15.png'),
      title: '리그 오브 레전드',
      description: '이번 팬아트는 설날을 맞아 한복 컨셉을 상상하며 제작했습니다',
      likes: 1500,
      views: 3600
    },
    {
      id: 16,
      image: require('../assets/img/home_img16.png'),
      title: '리그 오브 레전드',
      description: '게임에서는 말하지 않았던 뒷이야기를 상상하며 컷을 구성했습니다',
      likes: 2100,
      views: 4900
    },
    {
      id: 17,
      image: require('../assets/img/home_img17.png'),
      title: '마비노기',
      description: '이 세계는 가상이지만, 나에게는 가장 진짜였어요.',
      likes: 2800,
      views: 6500
    },
    {
      id: 18,
      image: require('../assets/img/home_img18.png'),
      title: '테일즈런너',
      description: "이 캐릭터를 그리면서 진짜 '현실 도피'에 성공했습니다 ㅎㅎ",
      likes: 1200,
      views: 2800
    },
    {
      id: 19,
      image: require('../assets/img/home_img19.png'),
      title: '오버워치',
      description: '플레이하던 순간의 몰입감을 컷으로 다시 느끼고 싶었어요.',
      likes: 1900,
      views: 4500
    },
    {
      id: 20,
      image: require('../assets/img/home_img20.png'),
      title: '마비노기',
      description: '지친 하루 끝, 위로가 되어준 캐릭터를 오늘은 나도 그려봅니다.',
      likes: 1500,
      views: 3500
    },
    {
      id: 21,
      image: require('../assets/img/home_img21.png'),
      title: '메이플스토리',
      description: '이 감정, 꼭 남기고 싶었어요!! 그림으로라도..',
      likes: 2300,
      views: 5400
    },
    {
      id: 22,
      image: require('../assets/img/home_img22.png'),
      title: '발로란트',
      description: '이 그림은 단순한 팬아트가 아니라, 나의 기억 조각입니다.',
      likes: 980,
      views: 2300
    },
    {
      id: 23,
      image: require('../assets/img/home_img23.png'),
      title: '발로란트',
      description: '게임도, 팬아트도 결국은 사랑이더라고요',
      likes: 2600,
      views: 6100
    },
    {
      id: 24,
      image: require('../assets/img/home_img24.png'),
      title: '리그 오브 레전드',
      description: '이번 작업은 오랜 팬으로서, 오롯이 애정을 담아낸 결과물입니다',
      likes: 1800,
      views: 4200
    },
    {
      id: 25,
      image: require('../assets/img/home_img25.png'),
      title: '리그 오브 레전드',
      description: '각 장면이 이어지는 감정선을 상상하며 구성했습니다',
      likes: 2100,
      views: 4900
    }
  ];

  // 카드 배열을 섞는 함수
  const shuffleArray = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // 초기 카드 데이터 생성
  const generateInitialCards = () => {
    return shuffleArray(cardData);
  };

  const loadMoreItems = () => {
    if (loadingRef.current) return;
    
    loadingRef.current = true;
    setLoading(true);

    // 새로운 카드 데이터 생성
    const newItems = shuffleArray(cardData).map((item, index) => ({
      ...item,
      id: items.length + index + 1
    }));

    // 상태 업데이트
    setItems(prevItems => [...prevItems, ...newItems]);
    setLoading(false);
    loadingRef.current = false;
  };

  useEffect(() => {
    // 초기 데이터 로드
    setItems(generateInitialCards());

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // 스크롤이 페이지 하단에 가까워지면 새로운 아이템 로드
      if (scrollHeight - scrollTop - clientHeight < 2000) {
        loadMoreItems();
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <Masonry
        breakpointCols={breakpointColumns}
        className="gallery"
        columnClassName="gallery_column"
      >
        {items.map((item) => (
          <HomeCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            likes={item.likes}
            views={item.views}
            onClick={() => handleCardClick()}
          />
        ))}
      </Masonry>
      {loading && (
        <div className="loading">
          <div className="loading_spinner"></div>
        </div>
      )}

      {/* 챗봇 아이콘 */}
      <div className={`chatbot-icon ${isChatbotOpen ? 'open' : 'closed'}`} onClick={handleChatbotIconClick}>
        {isChatbotOpen ? (
          <i className="fa-solid fa-xmark"></i> // 닫기 아이콘
        ) : (
          <i className="fa-solid fa-comment-dots"></i> // 열기 아이콘 (Font Awesome 필요)
        )}
      </div>
    </div>
  );
};

export default Home; 