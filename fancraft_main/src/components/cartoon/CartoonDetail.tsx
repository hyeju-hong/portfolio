import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CartoonDetail.css';

// Interface 정의 추가 (IllustDetail.tsx에서 사용된 인터페이스를 기반으로 복사)
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

interface Comment {
  id: number;
  userName: string;
  text: string;
  time: string;
  userAvatarUrl?: string; // Optional based on previous usage
}

const mockCartoons: IllustrationData[] = [
  {
    id: 1,
    $imageUrl: '/assets/img/cartoondetail_img1.png',
    title: '루미야 너는 세금더내라',
    description: "이것도너프해보시지",
    author: 'PING',
    $profileImageUrl: '/assets/img/profile_base.png',
    likes: 1200,
    views: 3400,
  },
  {
    id: 2,
    $imageUrl: '/assets/img/cartoon_main_img02.png',
    title: '메이플스토리',
    description: '커플링단편',
    author: '뺩씨',
    $profileImageUrl: '/assets/img/cartoon_profile2.jpg',
    likes: 892,
    views: 2100,
  },
    {
    id: 3,
    $imageUrl: '/assets/img/cartoon_main_img03.png',
    title: '메이플스토리',
    description: '루미야 너는 세금두배내라',
    author: '백금백이진리지요',
    $profileImageUrl: '/assets/img/cartoon_profile3.jpg',
    likes: 2300,
    views: 5700,
  },
    {
    id: 4,
    $imageUrl: '/assets/img/cartoon_main_img04.png',
    title: '오버워치',
    description: '옵치결혼식',
    author: '햎딩이좋아요',
    $profileImageUrl: '/assets/img/cartoon_profile4.jpg',
    likes: 654,
    views: 1800,
  },
    {
    id: 5,
    $imageUrl: '/assets/img/cartoon_main_img05.png',
    title: '리그오브레전드',
    description: '아리귀여워',
    author: '넨네님',
    $profileImageUrl: '/assets/img/cartoon_profile5.jpg',
    likes: 3100,
    views: 7200,
  },
    {
    id: 6,
    $imageUrl: '/assets/img/cartoon_main_img06.png',
    title: '오버워치',
    description: '옵치짧게',
    author: '옵치하세요다들',
    $profileImageUrl: '/assets/img/cartoon_profile6.jpg',
    likes: 421,
    views: 989,
  },
    {
    id: 7,
    $imageUrl: '/assets/img/cartoon_main_img07.png',
    title: '오버워치',
    description: '서른다섯이라고?',
    author: '겐지장인이코스',
    $profileImageUrl: '/assets/img/cartoon_profile7.jpg',
    likes: 1700,
    views: 4100,
  },
    {
    id: 8,
    $imageUrl: '/assets/img/cartoon_main_img08.png',
    title: '메이플스토리',
    description: '메이플 장편 1',
    author: '뽀코팡',
    $profileImageUrl: '/assets/img/cartoon_profile8.jpg',
    likes: 892,
    views: 2300,
  },
     {
    id: 9,
    $imageUrl: '/assets/img/cartoon_main_img09.png',
    title: '오버워치',
    description: '커플링단편',
    author: '뺩씨',
    $profileImageUrl: '/assets/img/cartoon_profile1.jpg',
    likes: 5000,
    views: 12000,
  },
     {
    id: 10,
    $imageUrl: '/assets/img/cartoon_main_img10.png',
    title: '리그오브레전드',
    description: '아리귀여워',
    author: '넨네님',
    $profileImageUrl: '/assets/img/cartoon_profile2.jpg',
    likes: 4500,
    views: 10000,
  },
     {
    id: 11,
    $imageUrl: '/assets/img/cartoon_main_img11.png',
    title: '메이플스토리',
    description: '뭐 왜?',
    author: '달디단밤양갱갱갱',
    $profileImageUrl: '/assets/img/cartoon_profile3.jpg',
    likes: 4000,
    views: 9000,
  },
     {
    id: 12,
    $imageUrl: '/assets/img/cartoon_main_img12.png',
    title: '오버워치',
    description: '옵치결혼식',
    author: '햎딩이좋아요',
    $profileImageUrl: '/assets/img/cartoon_profile4.jpg',
    likes: 3500,
    views: 8000,
  },
];

const CartoonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [newComment, setNewComment] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, userName: '이세계', text: '재밌어요!', time: '오전 10:00', userAvatarUrl: '/assets/img/illust_profile1.jpg' },
    { id: 2, userName: '웹디자인쌉고수', text: '다음 화 기대됩니다.', time: '오전 11:00', userAvatarUrl: '/assets/img/illust_profile3.jpg' },
  ]);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [illustration, setIllustration] = useState<IllustrationData | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const foundCartoon = mockCartoons.find(
      (item) => item.id === parseInt(id || '', 10)
    );

    if (foundCartoon) {
      setIllustration(foundCartoon);
      setLikeCount(foundCartoon.likes);
    } else {
      console.error(`Cartoon with id ${id} not found.`);
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

  if (!illustration) {
    return <div className="cartoon_detail_container">Loading or Cartoon not found...</div>;
  }

  return (
    <div className="cartoon_detail_container">
      <div className="cartoon_detail_header">
        <h1>{illustration.title}</h1>
      </div>
      <div className="cartoon_detail_content">
        {isMobile ? (
          <div className="cartoon_detail_main" style={{ flexDirection: 'column', display: 'flex', gap: 10, padding: 0, margin: 0 }}>
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
              className="cartoon_detail_info"
              style={{ order: 2, width: '100%', maxWidth: '100%', padding: '15px', margin: 0, borderRadius: 0, boxSizing: 'border-box', backgroundColor: '#1a1a1a' }}
            >
              <div className="cartoon_detail_author">
                <div
                  className="author_avatar"
                  style={{ backgroundImage: `url(${illustration.$profileImageUrl})` }}
                ></div>
                <div className="author_info">
                  <h3>{illustration.author}</h3>
                  <p>팔로워 1.2K</p>
                </div>
              </div>
              <div className="cartoon_detail_stats">
                <div className="stat_item">
                  <i className="fa-solid fa-heart"></i>
                  <span>{likeCount.toLocaleString()}</span>
                </div>
                <div className="stat_item">
                  <i className="fa-solid fa-eye"></i>
                  <span>{illustration.views.toLocaleString()}</span>
                </div>
              </div>
              <div className="cartoon_detail_actions">
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
              <div className="cartoon_detail_description">
                <p>{illustration.description}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="cartoon_detail_main">
            <div
              className="cartoon_detail_image"
              style={{ backgroundImage: `url(${illustration.$imageUrl})` }}
            >
            </div>
            <div className="cartoon_detail_info">
              <div className="cartoon_detail_author">
                <div
                  className="author_avatar"
                  style={{ backgroundImage: `url(${illustration.$profileImageUrl})` }}
                ></div>
                <div className="author_info">
                  <h3>{illustration.author}</h3>
                  <p>팔로워 1.2K</p>
                </div>
              </div>
              <div className="cartoon_detail_stats">
                <div className="stat_item">
                  <i className="fa-solid fa-heart"></i>
                  <span>{likeCount.toLocaleString()}</span>
                </div>
                <div className="stat_item">
                  <i className="fa-solid fa-eye"></i>
                  <span>{illustration.views.toLocaleString()}</span>
                </div>
              </div>
              <div className="cartoon_detail_actions">
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
              <div className="cartoon_detail_description">
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

export default CartoonDetail; 