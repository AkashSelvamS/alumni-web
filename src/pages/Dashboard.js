// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreatePost from "../components/CreatePost";
import PostFeed from "../components/PostFeed";
import FilterBar from "../components/FilterBar";
import "./Dashboard.css";

const Home = () => {
  const navigate = useNavigate();
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [postKey, setPostKey] = useState(0);

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (!user) navigate("/signin");
  }, []);

  return (
    <div>
      <div className="dashboard-header">
        <h2>🎓 Welcome, {user?.result?.name}</h2>
      </div>

      <div className="profile-card">
        <p><strong>Email:</strong> {user?.result?.email}</p>
        <p><strong>Role:</strong> {user?.result?.role}</p>
        <p><strong>Department:</strong> {user?.result?.department}</p>
        <p><strong>Batch:</strong> {user?.result?.batch}</p>
      </div>

      <CreatePost onPostCreated={() => setPostKey(prev => prev + 1)} />

      <FilterBar
        selectedDept={selectedDept}
        setSelectedDept={setSelectedDept}
        selectedBatch={selectedBatch}
        setSelectedBatch={setSelectedBatch}
      />

      <PostFeed
        selectedDept={selectedDept}
        selectedBatch={selectedBatch}
        key={postKey}
      />
    </div>
  );
};

export default Home;
