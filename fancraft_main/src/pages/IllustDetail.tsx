import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './IllustDetail.css';

interface Comment {
  id: number;
  userName: string;
  text: string;
  time: string;
}

const IllustDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [newComment, setNewComment] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, userName: '결벽증리바이', text: '레 전 드 다', time: '오전 6:57' },
    { id: 2, userName: '리빠이병사', text: '가둬놓고 그림만 그리게하고프다', time: '오전 6:57' },
    { id: 3, userName: '리바이와이프', text: '좋아요 왜 한 번밖에 못 눌러', time: '오전 6:57' },
    { id: 4, userName: '리바이는바인가요', text: '디바 너무 예뻐요 ㅠㅠ', time: '오전 6:57' },
    { id: 5, userName: '빔', text: '디바 는 신 이 야', time: '오전 6:57' }
  ]);
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(2357);

  const handleSearch = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    console.log('검색:', searchQuery);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        userName: '현재 사용자',
        text: newComment,
        time: new Date().toLocaleTimeString('ko-KR', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        })
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

  return (
    <div className="illust_detail_container">
      <div className="illust_detail_header">
        <h1>오버워치 썸머 비치 파티!</h1>
      </div>
      
      <div className="illust_detail_content">
        <div className="illust_detail_main">
          <div className="illust_detail_image">
            {/* 이미지가 들어갈 자리 */}
          </div>
          
          <div className="illust_detail_info">
            <div className="illust_detail_author">
              <div className="author_avatar"></div>
              <div className="author_info">
                <h3>작가 이름</h3>
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
                <span>5.7K</span>
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
              <p>이번 테마는 '여름 물 놀이'로 그렸어요. 여러분도 시원한 여름 보내길~</p>
            </div>
          </div>
        </div>
        
        <div className="comment_section">
          <h3>댓글</h3>
          <div className="comment_input">
            <div className="comment_user_avatar"></div>
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
                <div className="comment_user_avatar"></div>
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