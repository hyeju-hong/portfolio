import React from 'react';
import './ContestCard.css';

interface ContestCardProps {
  image: string;
  title: string;
  author: string;
  authorAvatar: string;
  link?: string;
}

const ContestCard: React.FC<ContestCardProps> = ({
  image,
  title,
  author,
  authorAvatar,
  link = '#'
}) => {
  return (
    <div className="contest_card">
      <a href={link}>
        <div className="contest_image" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="contest_content">
          <div className="contest_title">{title}</div>
          <div className="contest_author">
            <div className="author_avatar" style={{ backgroundImage: `url(${authorAvatar})` }}></div>
            <span>{author}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContestCard; 