import React, { useState } from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [nickname, setNickname] = useState('짤랑이'); // 초기 닉네임 설정
  const [editingNickname, setEditingNickname] = useState(false);
  const [showNicknameAlert, setShowNicknameAlert] = useState(false); // 닉네임 변경 알림 상태

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          setProfileImage(e.target.result);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handleNicknameEdit = () => {
    setEditingNickname(true);
  };

  const handleNicknameSave = () => {
    // TODO: Save nickname to backend
    setEditingNickname(false);
    setShowNicknameAlert(true); // 커스텀 알림 표시
  };

  const handleNicknameCancel = () => {
    // TODO: Revert nickname if needed
    setEditingNickname(false);
  };

  const handleCloseNicknameAlert = () => {
    setShowNicknameAlert(false);
  };

  return (
    <>
      {showNicknameAlert && (
        <div className="custom_alert_overlay">
          <div className="custom_alert">
            <div className="custom_alert_content">
              <p>닉네임이 변경되었습니다.</p>
              <button onClick={handleCloseNicknameAlert}>확인</button>
            </div>
          </div>
        </div>
      )}
    <div className="profile_container">
      <div className="profile_header">
        <h1>프로필</h1>
        <p>프로필 정보 및 설정을 관리합니다</p>
      </div>

      <div className="profile_content">
        <div className="profile_section">
          <h2>프로필 사진</h2>
          <div className="profile_item profile_image_upload">
            <img
              src={profileImage || require('../assets/img/test1.png')} // 기본 이미지 설정
              alt="프로필 이미지"
              className="profile_image"
            />
            <label htmlFor="profileImageUpload" className="settings_button">
              사진 변경
            </label>
            <input
              id="profileImageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>
        </div>

        <div className="profile_section">
          <h2>닉네임 변경</h2>
          <div className="profile_item">
            <div className="profile_nickname_display">
              {editingNickname ? (
                <input
                  type="text"
                  value={nickname}
                  onChange={handleNicknameChange}
                  className="profile_nickname_input"
                />
              ) : (
                <span className="profile_nickname_text">{nickname}</span>
              )}
            </div>
            {editingNickname ? (
              <div className="profile_nickname_actions">
                <button className="settings_button" onClick={handleNicknameSave}>저장</button>
                <button className="settings_button delete" onClick={handleNicknameCancel}>취소</button>
              </div>
            ) : (
              <button className="settings_button" onClick={handleNicknameEdit}>변경</button>
            )}
          </div>
        </div>

        {/* 추가적인 프로필 관련 섹션 추가 */}

      </div>
    </div>
    </>
  );
};

export default Profile; 