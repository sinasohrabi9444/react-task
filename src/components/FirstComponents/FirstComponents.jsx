import React from "react";
import "./FirstComponents.css";
import { useState, useEffect } from "react";
import { FaSheetPlastic } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import posts from "../../datas";
import GetPosts from "../getPosts/GetPosts";
import ShowWithComment from "../showWithComment/ShowWithComment";
import ShowUsers from "../ShowUsers/ShowUsers";

import ShowUsersClass from '../ShowUsersClass/ShowUsersClass'
export default function FirstComponents() {
  const [datas, setDatas] = useState(posts);
  const [selectedPost , setSelectedPost] = useState(datas[0]);

  const handlePost = (post)=>{
    setSelectedPost(post)
  }

  const navigate  = useNavigate();
  const moreInformation = ()=>{
    navigate(`/post/${selectedPost.id}`)
  }

  useEffect(()=>{
      console.log(selectedPost);
      
  } , [selectedPost])

  return (
    <>
    <div className="show-posts">
      <div className="left-side">
        {datas.map((data) => (
          <div className="btn-post" onClick={()=>{handlePost(data)}}>
            <FaSheetPlastic />
            <h5>Show Post {data.id}</h5>
          </div>
        ))}
      </div>
      <div className="right-side">
        <div className="img-post">
          <img src={process.env.PUBLIC_URL +selectedPost.img} alt="butterfly" />
        </div>
        <h4 className="title-post">{selectedPost.title}</h4>
        <p className="description">
          {selectedPost.description}
        </p>
        <button className="more" onClick={moreInformation}>More Information</button>
      </div>
    </div>
    
    <GetPosts /> 

    <ShowWithComment />

    <ShowUsers />
    
    <ShowUsersClass />
    </>
  );
}
