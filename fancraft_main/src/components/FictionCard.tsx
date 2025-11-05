import React from 'react';
import './FictionCard.css';

interface FictionCardProps {
  image: string;
  title: string;
  description: string | undefined;
  tag: string;
  author: string;
  authorAvatar: string;
  onClick?: () => void;
}

const FictionCard: React.FC<FictionCardProps> = ({
  image,
  title,
  description,
  tag,
  author,
  authorAvatar,
  onClick
}) => {
  return (
    <div className="fiction_card" onClick={onClick}>
      <div 
        className="fiction_card_image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="fiction_card_content">
        <div className="fiction_card_title">{title}</div>
        <div className="fiction_card_description">{description}</div>
        <div className="fiction_card_tag">{tag}</div>
        <div className="fiction_card_author">
          <div 
            className="fiction_author_avatar"
            style={{ backgroundImage: `url(${authorAvatar})` }}
          ></div>
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default FictionCard; 