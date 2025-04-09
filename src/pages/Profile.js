// 🧩 src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState(null);
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const profile = JSON.parse(localStorage.getItem('profile'));
      if (profile) setUser(profile);
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const { data } = await axios.put('http://localhost:5000/api/user/profile', user);
    localStorage.setItem('profile', JSON.stringify(data));
    alert('Profile updated!');
  };

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('avatar', file);
    const { data } = await axios.post('http://localhost:5000/api/user/upload/avatar', formData);
    setUser({ ...user, avatar: data.avatar });
  };

  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('resume', file);
    const { data } = await axios.post('http://localhost:5000/api/user/upload/resume', formData);
    setUser({ ...user, resume: data.resume });
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Edit Profile</h2>
        <img src={user.avatar || '/default-avatar.png'} alt="avatar" className="avatar" />
        <input type="file" onChange={handleAvatarUpload} />

        <input name="name" value={user.name || ''} onChange={handleChange} placeholder="Name" />
        <input name="department" value={user.department || ''} onChange={handleChange} placeholder="Department" />
        <input name="batch" value={user.batch || ''} onChange={handleChange} placeholder="Batch" />
        <textarea name="bio" value={user.bio || ''} onChange={handleChange} placeholder="Your bio" />

        <label>Upload Resume (PDF):</label>
        <input type="file" accept="application/pdf" onChange={handleResumeUpload} />

        {user.resume && (
          <a href={`http://localhost:5000/uploads/${user.resume}`} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        )}

        <button onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
}

export default Profile;
