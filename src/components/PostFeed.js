import React, { useEffect, useState } from "react";
import axios from "axios";

function PostFeed({ selectedDept, selectedBatch }) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:5000/api/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    return (
      (!selectedDept || post.department === selectedDept) &&
      (!selectedBatch || post.batch === selectedBatch)
    );
  });

  return (
    <div className="post-feed">
      {filteredPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        filteredPosts.map((post) => (
          <div className="post" key={post._id}>
            <h4>{post.userId.name} ({post.batch}, {post.department})</h4>
            <p>{post.content}</p>
            <span>{new Date(post.timestamp).toLocaleString()}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default PostFeed;
