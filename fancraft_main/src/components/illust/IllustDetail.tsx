import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './IllustDetail.css';
import illustMainImg from '../../assets/img/illustdetail_main_img1.png';

interface Comment {
  id: number;
  userName: string;
  text: string;
  time: string;
  userAvatarUrl?: string;
}

interface IllustrationData {
  id: number;
  $imageUrl: string;
  title: string;
  description: string;
  author: string;
  $profileImageUrl: string;
  likes: number;
  views: number;
}

// 임시 더미 데이터 
const mockIllustrations: IllustrationData[] = [
  {
    id: 1,
    $imageUrl: illustMainImg,
    title: '오버워치',
    description: "이번 테마는 '여름 물 놀이'으로 그렸어요. 여러분도 시원한 여름 보내길~ ",
    author: '빔은고양이야',
    $profileImageUrl: '/assets/img/illust_profile1.jpg',
    likes: 1200,
    views: 3400,
  },
  {
    id: 2,
    $imageUrl: '/assets/img/illustdetail_main_img1.png',
    title: '오버워치',
    description: '애정 가득 담았어요. 소중히 감상해 주세요!',
    author: '고양이냥냥냥',
    $profileImageUrl: '/assets/img/illust_profile2.jpg',
    likes: 892,
    views: 2100,
  },
  {
    id: 3,
    $imageUrl: '/assets/img/illustdetail_main_img1.png',
    title: '오버워치',
    description: '복 많이 받으세요! 새해 인사 드립니다 :)',
    author: '미소년킬러',
    $profileImageUrl: '/assets/img/illust_profile3.jpg',
    likes: 2300,
    views: 5700,
  },
  {
    id: 4,
    $imageUrl: '/assets/img/illustdetail_main_img1.png',
    title: '오버워치',
    description: '더운 하루, 오버워치 팀과 함께 떠난 가상의 여름 바캉스',
    author: '백금은세계를구해',
    $profileImageUrl: '/assets/img/illust_profile4.jpg',
    likes: 654,
    views: 1800,
  },
  {
    id: 5,
    $imageUrl: '/assets/img/illustdetail_main_img1.png',
    title: '오버워치',
    description: '이 여름, 게임 속에서 피어난 또 하나의 추억을 팬아트로 남깁니다.',
    author: '데블린의악마',
    $profileImageUrl: '/assets/img/illust_profile5.jpg',
    likes: 3100,
    views: 7200,
  },
  {
    id: 6,
    $imageUrl: '/assets/img/illustdetail_main_img1.png',
    title: '발로란트',
    description: '처음 만났을 때의 설렘을 잊지 못해, 팬아트로 그려봅니다',
    author: '븙샤',
    $profileImageUrl: '/assets/img/illust_profile6.jpg',
    likes: 421,
    views: 989,
  },
  {
    id: 7,
    $imageUrl: '/assets/img/illustdetail_main_img1.png',
    title: '발로란트',
    description: '너무 귀엽지 않나여~~?',
    author: '버네나버네',
    $profileImageUrl: '/assets/img/illust_profile7.jpg',
    likes: 1700,
    views: 4100,
  },
  {
    id: 8,
    $imageUrl: '/assets/img/illustdetail_main_img1.png',
    title: '던전앤파이터',
    description: '이 캐릭터가 없었다면 지금의 나는 없었을지도 몰라요',
    author: '엔젤릭쌉고수',
    $profileImageUrl: '/assets/img/illust_profile8.jpg',
    likes: 892,
    views: 2300,
  },
  {
    id: 9,
    $imageUrl: '/assets/img/illustdetail_main_img1.png',
    title: '오버워치',
    description: '이번 시즌 최고의 인기작!',
    author: '프로일러스트레이터',
    $profileImageUrl: '/assets/img/illust_profile1.jpg',
    likes: 5000,
    views: 12000,
  },
  {
    id: 10,
    $imageUrl: '/assets/img/illustdetail_main_img1.png',
    title: '리그오브레전드',
    description: '전설의 챔피언을 그려보았습니다',
    author: '게임아티스트',
    $profileImageUrl: '/assets/img/illust_profile2.jpg',
    likes: 4500,
    views: 10000,
  },
  {
    id: 11,
    $imageUrl: '/assets/img/illustdetail_main_img1.png',
    title: '메이플스토리',
    description: '추억의 캐릭터를 현대적으로 재해석',
    author: '디지털아티스트',
    $profileImageUrl: '/assets/img/illust_profile3.jpg',
    likes: 4000,
    views: 9000,
  },
  {
    id: 12,
    $imageUrl: '/assets/img/illustdetail_main_img1.png',
    title: '발로란트',
    description: '새로운 에이전트의 매력을 담아보았습니다',
    author: '게임일러스트레이터',
    $profileImageUrl: '/assets/img/illust_profile4.jpg',
    likes: 3500,
    views: 8000,
  }
];

const IllustDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [newComment, setNewComment] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, userName: '결벽증리바이', text: '레 전 드 다', time: '오전 6:57', userAvatarUrl: '/assets/img/illust_profile1.jpg' },
    { id: 2, userName: '리빠이병사', text: '가둬놓고 그림만 그리게하고프다', time: '오전 6:57', userAvatarUrl: '/assets/img/illust_profile2.jpg' },
    { id: 3, userName: '리바이와이프', text: '좋아요 왜 한 번밖에 못 눌러', time: '오전 6:57', userAvatarUrl: '/assets/img/illust_profile3.jpg' },
    { id: 4, userName: '리바이는바인가요', text: '디바 너무 예뻐요 ㅠㅠ', time: '오전 6:57', userAvatarUrl: '/assets/img/illust_profile4.jpg' },
    { id: 5, userName: '빔', text: '디바 는 신 이 야', time: '오전 6:57', userAvatarUrl: '/assets/img/illust_profile5.jpg' }
  ]);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [illustration, setIllustration] = useState<IllustrationData | null>(null);
  // 모바일 여부 체크
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const foundIllustration = mockIllustrations.find(
      (item) => item.id === parseInt(id || '', 10)
    );

    if (foundIllustration) {
      setIllustration(foundIllustration);
      setLikeCount(foundIllustration.likes); // 좋아요 수 초기화

    } else {

      console.error(`Illustration with id ${id} not found.`);
      setIllustration(null);
    }
  }, [id]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    console.log('검색:', searchQuery);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        userName: '짤랑이',
        text: newComment,
        time: new Date().toLocaleTimeString('ko-KR', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        }),
        userAvatarUrl: '/assets/img/test1.png'
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  // 데이터 로딩 중이거나 데이터가 없을 경우 처리
  if (!illustration) {
    return <div className="illust_detail_container">Loading or Illustration not found...</div>;
  }

  return (
    <div className="illust_detail_container">
      <div className="illust_detail_header">
        <h1>오버워치 썸머 비치 파티!</h1>
      </div>
      <div className="illust_detail_content">
        {isMobile ? (
          <div className="illust_detail_main" style={{ flexDirection: 'column', display: 'flex', gap: 10, padding: 0, margin: 0 }}>
            <div style={{ width: '100%', maxWidth: '100%', aspectRatio: '16/9', borderRadius: 0, margin: 0, background: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <img
                src={illustration.$imageUrl}
                alt={illustration.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0, display: 'block' }}
              />
            </div>
            <button
              className="view-full-btn"
              style={{
                width: '100%',
                padding: '12px 0',
                background: '#222',
                color: '#fff',
                fontSize: '1rem',
                border: 'none',
                borderRadius: '0 0 8px 8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                margin: '0 0 10px 0',
                cursor: 'pointer'
              }}
              onClick={() => alert('이미지 전체보기(확대) 기능 구현 필요')}
            >
              <i className="fa-solid fa-magnifying-glass-plus"></i>
              전체보기
            </button>
            <div
              className="illust_detail_info"
              style={{ order: 2, width: '100%', maxWidth: '100%', padding: '15px', margin: 0, borderRadius: 0, boxSizing: 'border-box', backgroundColor: '#1a1a1a' }}
            >
              <div className="illust_detail_author">
                <div
                  className="author_avatar"
                  style={{ backgroundImage: `url(${illustration.$profileImageUrl})` }}
                ></div>
                <div className="author_info">
                  <h3>{illustration.author}</h3>
                  <p>팔로워 1.2K</p>
                </div>
              </div>
              <div className="illust_detail_stats">
                <div className="stat_item">
                  <i className="fa-solid fa-heart"></i>
                  <span>{likeCount.toLocaleString()}</span>
                </div>
                <div className="stat_item">
                  <i className="fa-solid fa-eye"></i>
                  <span>{illustration.views.toLocaleString()}</span>
                </div>
              </div>
              <div className="illust_detail_actions">
                <button
                  className="action_button"
                  onClick={handleLike}
                >
                  {isLiked ? '좋아요 취소' : '좋아요'}
                </button>
                <button
                  className="action_button"
                  onClick={handleFollow}
                >
                  {isFollowing ? '팔로우 취소' : '팔로우'}
                </button>
              </div>
              <div className="illust_detail_description">
                <p>{illustration.description}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="illust_detail_main">
            <div
              className="illust_detail_image"
              style={{ backgroundImage: `url(${illustration.$imageUrl})` }}
            >
              {/* 이미지가 들어갈 자리 */}
            </div>
            <div className="illust_detail_info">
              <div className="illust_detail_author">
                <div
                  className="author_avatar"
                  style={{ backgroundImage: `url(${illustration.$profileImageUrl})` }}
                ></div>
                <div className="author_info">
                  <h3>{illustration.author}</h3>
                  <p>팔로워 1.2K</p>
                </div>
              </div>
              <div className="illust_detail_stats">
                <div className="stat_item">
                  <i className="fa-solid fa-heart"></i>
                  <span>{likeCount.toLocaleString()}</span>
                </div>
                <div className="stat_item">
                  <i className="fa-solid fa-eye"></i>
                  <span>{illustration.views.toLocaleString()}</span>
                </div>
              </div>
              <div className="illust_detail_actions">
                <button
                  className="action_button"
                  onClick={handleLike}
                >
                  {isLiked ? '좋아요 취소' : '좋아요'}
                </button>
                <button
                  className="action_button"
                  onClick={handleFollow}
                >
                  {isFollowing ? '팔로우 취소' : '팔로우'}
                </button>
              </div>
              <div className="illust_detail_description">
                <p>{illustration.description}</p>
              </div>
            </div>
          </div>
        )}
        <div className="comment_section">
          <h3>댓글</h3>
          <div className="comment_input">
            <div className="comment_user_avatar" style={{ backgroundImage: `url(/assets/img/test1.png)` }}></div>
            <input
              type="text"
              placeholder="댓글을 입력하세요"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleCommentSubmit()}
            />
            <button onClick={handleCommentSubmit}>전송</button>
          </div>
          <div className="comments_list">
            {comments.map((comment) => (
              <div key={comment.id} className="comment_item">
                <div className="comment_user_avatar" style={{ backgroundImage: `url(${comment.userAvatarUrl || '/assets/img/test1.png'})` }}></div>
                <div className="comment_content">
                  <div className="comment_user_name">{comment.userName}</div>
                  <div className="comment_text">{comment.text}</div>
                  <div className="comment_time">{comment.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllustDetail; 