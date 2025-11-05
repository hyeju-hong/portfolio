import React from 'react';
import styled from 'styled-components';

interface CardProps {
  $imageUrl: string;
  $profileImageUrl: string;
  title: string;
  description: string;
  likes: number;
  views: number;
  profileName?: string;
  tags?: string[];
  onClick?: () => void;
}

const CardContainer = styled.div`
  border: 1px solid #333;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  background-color: #000511;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(110, 255, 81, 0.2);
    border-color: #6eff51;
  }
`;

const CardImage = styled.div<{ $imageUrl: string }>`
  width: 100%;
  height: 350px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.$imageUrl});
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    background-size: cover;
    background-position: center;
    transition: transform 0.8s ease;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    z-index: 2;
    pointer-events: none;
  }

  ${CardContainer}:hover &::before {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CardTitle = styled.h3`
  color: white;
  font-size: 18px;
  margin-bottom: 8px;
  font-family: 'nexon_medium';
  font-weight: 600;
  line-height: 1.3;
`;

const CardDescription = styled.p`
  color: #b0b0b0;
  font-size: 14px;
  font-family: 'nexon_regular';
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 20px;
  max-height: 2.8em; /* line-height * 2 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  flex: 1;
  position: relative;

  &::after {
    content: '...';
    position: absolute;
    bottom: 0;
    right: 0;
    background: #000511;
    padding-left: 4px;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid #2a2a3e;
  margin-top: auto;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AuthorAvatar = styled.div<{ $imageUrl: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.$imageUrl});
  border: 1px solid #333;
`;

const AuthorName = styled.span`
  color: #888;
  font-size: 12px;
  font-family: 'nexon_regular';
`;

const CardStats = styled.div`
  display: flex;
  gap: 15px;
  color: #888;
  font-size: 12px;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: 'nexon_regular';
  }

  i {
    width: 14px;
    height: 14px;
    opacity: 0.7;
  }

  .fa-heart {
    color: #ff6b6b;
  }

  .fa-eye {
    color: #4ecdc4;
  }
`;

const CardTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: auto;
  margin-bottom: 10px;
`;

const CardTag = styled.span`
  background-color: #1a1a1a;
  color: #6eff51;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: 'nexon_regular', sans-serif;
`;

// 숫자 포맷팅 함수
const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
};

const Card: React.FC<CardProps> = ({
  $imageUrl,
  $profileImageUrl,
  title,
  description,
  likes,
  views,
  profileName = '빅픽고양이야',
  tags,
  onClick
}) => {
  return (
    <CardContainer onClick={onClick}>
      <CardImage $imageUrl={$imageUrl} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

        {tags && tags.length > 0 && (
          <CardTagsContainer>
            {tags.map((tag, index) => (
              <CardTag key={index}>{tag}</CardTag>
            ))}
          </CardTagsContainer>
        )}

        <CardFooter>
          <ProfileSection>
            <AuthorAvatar $imageUrl={$profileImageUrl} />
            <AuthorName>{profileName}</AuthorName>
          </ProfileSection>
          <CardStats>
            <span>
              <i className="fa-solid fa-eye"></i> 
              {formatNumber(views)}
            </span>
            <span>
              <i className="fa-solid fa-heart"></i> 
              {formatNumber(likes)}
            </span>
          </CardStats>
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
};

export default Card;