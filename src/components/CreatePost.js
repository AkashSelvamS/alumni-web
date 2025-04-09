import React, { useState } from "react";
import axios from "axios";

function CreatePost({ onPostCreated }) {
  const [content, setContent] = useState("");

  const handlePost = async () => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    if (!profile) return alert("Please sign in");

    const postData = {
      userId: profile.result._id,
      content,
      department: profile.result.department,
      batch: profile.result.batch,
    };

    try {
      await axios.post("http://localhost:5000/api/posts", postData);
      setContent("");
      onPostCreated(); // refresh feed
    } catch (err) {
      alert("Error creating post");
    }
  };

  return (
    <div className="create-post">
      <textarea
        placeholder="Share something with your alumni..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
}

export default CreatePost;
