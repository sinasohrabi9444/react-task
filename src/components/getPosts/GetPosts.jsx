import React, { useEffect, useState } from "react";
import "./GetPosts.css";

import posts from '../../datas'

export default function GetPosts() {

    const [datas , setDatas] = useState(posts);

    const [isLoading , setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    })
  return (
    <div className="did-mount-container">
      <div className="header">
        <h5 className="">Get From Componnet Did Mount </h5>
      </div>
      <div className="wrapper-did-mount ">
        <div className="posts-did-mount">
        {isLoading ? (
            <div className="loading">Loading ...</div>
        ) : datas.map((data)=>(
            <div className="solo-post" key={data.id}>
            <img src={process.env.PUBLIC_URL +data.img} alt={data.title} />
            <h4 className="title-did-mount">{data.title}</h4>
            <p className="description-did-mount">
              {data.description}
            </p>
          </div>
        ))}
          
        </div>
      </div>
    </div>
  );
}
