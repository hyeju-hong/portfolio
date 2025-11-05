import React from 'react';

interface HamburgerMenuProps {
  onClick: () => void;
  isOpen: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick, isOpen }) => {
  return (
    <button
      className={`hamburger-menu${isOpen ? ' open' : ''}`}
      onClick={onClick}
      aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
      style={{
        background: 'none',
        border: 'none',
        position: 'fixed',
        top: 20,
        left: 20,
        zIndex: 2200,
        width: 44,
        height: 44,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      {isOpen ? (
        <svg width="32" height="32" viewBox="0 0 32 32" style={{display:'block'}}>
          <line x1="8" y1="8" x2="24" y2="24" stroke="#e3ff7d" strokeWidth="4" strokeLinecap="round" />
          <line x1="24" y1="8" x2="8" y2="24" stroke="#e3ff7d" strokeWidth="4" strokeLinecap="round" />
        </svg>
      ) : (
        <>
          <span style={{
            width: 30,
            height: 4,
            background: '#e3ff7d',
            borderRadius: 2,
            margin: '3px 0',
            transition: '0.3s',
            display: 'block',
          }} />
          <span style={{
            width: 30,
            height: 4,
            background: '#e3ff7d',
            borderRadius: 2,
            margin: '3px 0',
            transition: '0.3s',
            display: 'block',
          }} />
          <span style={{
            width: 30,
            height: 4,
            background: '#e3ff7d',
            borderRadius: 2,
            margin: '3px 0',
            transition: '0.3s',
            display: 'block',
          }} />
        </>
      )}
    </button>
  );
};

export default HamburgerMenu; 