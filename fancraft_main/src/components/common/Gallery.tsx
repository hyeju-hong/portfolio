import React from 'react';
import Card from './Card';
import './Gallery.css';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  likes: number;
  views: number;
}

interface GalleryProps {
  items: GalleryItem[];
  onItemClick?: (id: number) => void;
}

const Gallery: React.FC<GalleryProps> = ({ items, onItemClick }) => {
  return (
    <div className="gallery">
      {items.map((item) => (
        <Card
          key={item.id}
          $imageUrl={item.image}
          title={item.title}
          description={item.description}
          likes={item.likes}
          views={item.views}
          onClick={() => onItemClick?.(item.id)}
        />
      ))}
    </div>
  );
};

export default Gallery; 