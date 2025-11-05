import React, { useState } from 'react';
import './Settings.css';

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('ko');

  return (
    <div className="settings_container">
      <div className="settings_header">
        <h1>설정</h1>
        <p>계정 및 환경설정을 관리하세요</p>
      </div>

      <div className="settings_content">
        <div className="settings_section">
          <h2>계정 설정</h2>
          <div className="settings_item">
            <div className="settings_item_info">
              <h3>프로필 정보</h3>
              <p>계정의 기본 정보를 관리합니다</p>
            </div>
            <button className="settings_button">수정</button>
          </div>
          <div className="settings_item">
            <div className="settings_item_info">
              <h3>비밀번호 변경</h3>
              <p>계정의 비밀번호를 변경합니다</p>
            </div>
            <button className="settings_button">변경</button>
          </div>
        </div>

        <div className="settings_section">
          <h2>알림 설정</h2>
          <div className="settings_item">
            <div className="settings_item_info">
              <h3>알림 받기</h3>
              <p>새로운 소식과 업데이트를 받습니다</p>
            </div>
            <label className="toggle_switch">
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
              />
              <span className="toggle_slider"></span>
            </label>
          </div>
        </div>

        <div className="settings_section">
          <h2>환경 설정</h2>
          <div className="settings_item">
            <div className="settings_item_info">
              <h3>다크 모드</h3>
              <p>어두운 테마를 사용합니다</p>
            </div>
            <label className="toggle_switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
              />
              <span className="toggle_slider"></span>
            </label>
          </div>
          <div className="settings_item">
            <div className="settings_item_info">
              <h3>언어</h3>
              <p>사용할 언어를 선택합니다</p>
            </div>
            <select 
              className="settings_select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="ko">한국어</option>
              <option value="en">English</option>
              <option value="ja">日本語</option>
            </select>
          </div>
        </div>

        <div className="settings_section">
          <h2>개인정보</h2>
          <div className="settings_item">
            <div className="settings_item_info">
              <h3>개인정보 처리방침</h3>
              <p>개인정보 수집 및 이용에 대한 안내</p>
            </div>
            <button className="settings_button">보기</button>
          </div>
          <div className="settings_item">
            <div className="settings_item_info">
              <h3>계정 삭제</h3>
              <p>계정과 관련된 모든 정보를 삭제합니다</p>
            </div>
            <button className="settings_button delete">삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 