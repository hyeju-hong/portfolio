import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './FictionDetail.css';

interface FictionData {
  id: number;
  $imageUrl: string;
  title: string;
  description: string;
  author: string;
  $profileImageUrl: string;
  likes: number;
  views: number;
}

interface Comment {
  id: number;
  userName: string;
  text: string;
  time: string;
  userAvatarUrl?: string;
}

const mockFictions: FictionData[] = [
  {
    id: 1,
    $imageUrl: '/assets/img/fictiondetail_main_img1.png', 
    title: '붉은 왕좌의 계승자',
    description: "전설적인 검술가의 이야기입니다.",
    author: '혜수',
    $profileImageUrl: '/assets/img/profile_base.png',
    likes: 5000,
    views: 15000,
  },
  {
    id: 2,
    $imageUrl: '/assets/img/fiction_main_img02.png',
    title: '마법 학교의 비밀',
    description: '젊은 마법사의 성장 일기',
    author: '마법사 룬',
    $profileImageUrl: '/assets/img/fiction_profile2.jpg',
    likes: 3200,
    views: 10000,
  },
  {
    id: 3,
    $imageUrl: '/assets/img/fiction_main_img03.png',
    title: '회귀한 영웅',
    description: '과거로 돌아온 영웅의 복수극',
    author: '시간여행자',
    $profileImageUrl: '/assets/img/fiction_profile3.jpg',
    likes: 7800,
    views: 25000,
  },
  {
    id: 4,
    $imageUrl: '/assets/img/fiction_main_img04.png',
    title: '미래 도시의 탐정',
    description: '사이버펑크 세계관의 추리극',
    author: '탐정 K',
    $profileImageUrl: '/assets/img/fiction_profile4.jpg',
    likes: 4100,
    views: 18000,
  },
  {
    id: 5,
    $imageUrl: '/assets/img/fiction_main_img05.png',
    title: '망나니 부활',
    description: '죽은 후 다시 태어난 망나니의 일대기',
    author: '환생좌',
    $profileImageUrl: '/assets/img/fiction_profile5.jpg',
    likes: 6500,
    views: 21000,
  },
  {
    id: 6,
    $imageUrl: '/assets/img/fiction_main_img06.png',
    title: '무림 고수의 이세계 생활',
    description: '차원이동한 무림 고수의 적응기',
    author: '강룡',
    $profileImageUrl: '/assets/img/fiction_profile6.jpg',
    likes: 5800,
    views: 19000,
  },
  {
    id: 7,
    $imageUrl: '/assets/img/fiction_main_img07.png',
    title: '탑에서 레벨업',
    description: '탑을 오르며 강해지는 주인공',
    author: '탑등반가',
    $profileImageUrl: '/assets/img/fiction_profile7.jpg',
    likes: 7200,
    views: 23000,
  },
  {
    id: 8,
    $imageUrl: '/assets/img/fiction_main_img08.png',
    title: '전지적 독자 시점',
    description: '읽던 소설 속으로 들어간 주인공',
    author: '싱숑',
    $profileImageUrl: '/assets/img/fiction_profile8.jpg',
    likes: 12000,
    views: 40000,
  },
];

const FictionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [newComment, setNewComment] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, userName: '소설덕후', text: '정말 흥미진진해요!', time: '오후 1:00', userAvatarUrl: '/assets/img/illust_profile2.jpg' },
    { id: 2, userName: '필력 지렸다', text: '밤새서 다 읽었습니다.', time: '오후 2:30', userAvatarUrl: '/assets/img/illust_profile4.jpg' },
  ]);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [fiction, setFiction] = useState<FictionData | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const foundFiction = mockFictions.find(
      (item) => item.id === parseInt(id || '', 10)
    );

    if (foundFiction) {
      setFiction(foundFiction);
      setLikeCount(foundFiction.likes);
    } else {
      console.error(`Fiction with id ${id} not found.`);
      setFiction(null);
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

  if (!fiction) {
    return <div className="fiction_detail_container">Loading or Fiction not found...</div>;
  }

  return (
    <div className="fiction_detail_container">
      <div className="fiction_detail_header">
        <h1>{fiction.title}</h1>
{/*         <div className="tag_box">
          <span className="tag">판타지</span>
          <span className="tag">액션</span>
          <span className="tag">회귀</span>
        </div> */}
      </div>

      <div className="fiction_detail_content">
        {isMobile ? (
          <div className="fiction_detail_main" style={{ flexDirection: 'column', display: 'flex', gap: 10, padding: 0, margin: 0 }}>
            <div style={{ width: '100%', maxWidth: '100%', aspectRatio: '16/9', borderRadius: 0, margin: 0, background: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <img
                src={fiction.$imageUrl}
                alt={fiction.title}
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
              className="fiction_detail_info"
              style={{ order: 2, width: '100%', maxWidth: '100%', padding: '15px', margin: 0, borderRadius: 0, boxSizing: 'border-box', backgroundColor: '#1a1a1a' }}
            >
              <div className="fiction_detail_author">
                <div
                  className="author_avatar"
                  style={{ backgroundImage: `url(${fiction.$profileImageUrl})` }}
                ></div>
                <div className="author_info">
                  <h3>{fiction.author}</h3>
                  <p>팔로워 1.5K</p>
                </div>
              </div>
              <div className="fiction_detail_stats">
                <div className="stat_item">
                  <i className="fa-solid fa-heart"></i>
                  <span>{likeCount.toLocaleString()}</span>
                </div>
                <div className="stat_item">
                  <i className="fa-solid fa-eye"></i>
                  <span>{fiction.views.toLocaleString()}</span>
                </div>
              </div>
              <div className="fiction_detail_actions">
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
              <div className="fiction_detail_description">
                <p>{fiction.description}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="fiction_detail_main">
            <div
              className="fiction_detail_image"
              style={{ backgroundImage: `url(${fiction.$imageUrl})` }}
            >
            </div>
            <div className="fiction_detail_info">
              <div className="fiction_detail_author">
                <div
                  className="author_avatar"
                  style={{ backgroundImage: `url(${fiction.$profileImageUrl})` }}
                ></div>
                <div className="author_info">
                  <h3>{fiction.author}</h3>
                  <p>팔로워 1.5K</p>
                </div>
              </div>
              <div className="fiction_detail_stats">
                <div className="stat_item">
                  <i className="fa-solid fa-heart"></i>
                  <span>{likeCount.toLocaleString()}</span>
                </div>
                <div className="stat_item">
                  <i className="fa-solid fa-eye"></i>
                  <span>{fiction.views.toLocaleString()}</span>
                </div>
              </div>
              <div className="fiction_detail_actions">
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
              <div className="fiction_detail_description">
                <p>{fiction.description}</p>
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

export default FictionDetail; 