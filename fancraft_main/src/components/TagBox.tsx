import React from 'react';
import styled from 'styled-components';

export interface TagBoxProps {
  title: string;
}

const TagBoxContainer = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--white-color);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 14px;
  font-family: 'nexon_regular';
  font-weight: normal;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  margin-top: 3px;
  margin-bottom: 3px;
  text-decoration: none;

  &:hover {
    background: linear-gradient(135deg, #6EFF51, #5CE63A);
    color: #1a1a1a;
    border-color: #6EFF51;
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(110, 255, 81, 0.3);
    z-index: 2;
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(110, 255, 81, 0.2);
  }
`;

export const TagBox: React.FC<TagBoxProps> = ({ title }) => {
  return (
    <TagBoxContainer href="#">
      {title}
    </TagBoxContainer>
  );
};