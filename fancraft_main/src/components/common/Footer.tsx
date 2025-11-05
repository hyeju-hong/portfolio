import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_logo">Fan Craft</div>
        <p>그림을 올리고, 팬을 만나고, 팬덤이 성장하는 우리들의 놀이터</p>
        <div className="footer_links">
          <a href="#">[소개]</a>
          <a href="#">[이용약관]</a>
          <a href="#">[개인정보 처리방침]</a>
        </div>
        <div className="footer_social">
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </div>
        <div className="footer_contact">hello@fancraft.kr</div>
        <div className="footer_copyright">
          <p>© 2025 [팬크래프트]모든 팬 콘텐츠는 각 창작자에게 저작권이 있습니다.</p>
          <p>원 저작물의 권리는 원작자 및 해당 소속사에 있습니다.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 