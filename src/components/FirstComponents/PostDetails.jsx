import React from "react";
import { useParams } from "react-router-dom";
import posts from "../../datas"; 

export default function PostDetails() {
  const { id } = useParams(); 
  const post = posts.find((p) => p.id === parseInt(id)); 

  if (!post) {
    return <div>Post not found!</div>; 
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.img} alt={post.title} />
      <p>{post.description}</p>
      <h3>Comments:</h3>
      <ul>
        {post.comment.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
