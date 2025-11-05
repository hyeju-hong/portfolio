import React from 'react';
import './HomeCard.css';

interface HomeCardProps {
  image: string;
  title: string;
  description: string;
  likes: number;
  views: number;
  onClick?: () => void;
}

const HomeCard: React.FC<HomeCardProps> = ({
  image,
  title,
  description,
  likes,
  views,
  onClick
}) => {
  return (
    <div className="home_card" onClick={onClick}>
      <img src={image} alt={title} className="home_card_image" />
      <div className="home_card_content">
        <h3 className="home_card_title">{title}</h3>
        <p className="home_card_description">{description}</p>
        <div className="home_card_footer">
          <div className="home_card_stats">
            <span><i className="fa-solid fa-heart"></i> {likes.toLocaleString()}</span>
            <span><i className="fa-solid fa-eye"></i> {views.toLocaleString()}</span>
          </div>
          <button className="home_more_btn" onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}>더보기</button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard; 