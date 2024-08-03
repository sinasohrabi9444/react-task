import React, { Component } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import "./ShowWithComment.css";
import posts from "../../datas";
export default class ShowWithComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      datas: posts,
    };
  }

  handleButtonClick = (post) => {
    this.setState({ selectedImage: post });
  };

  render() {
    const { selectedImage, datas } = this.state;

    return (
      <div className="comments-container">
        <div className="header-comments">
          <h5>show with comments</h5>
        </div>
        <div className="wrapper-comments">
          <div className="buttons-comments">
            {datas.map((data) => (
              <div
                className="comments-btn"
                key={data.id}
                onClick={() => this.handleButtonClick(data)}
              >
                <IoArrowDownCircleOutline className="icon" />
                <span>{data.title}</span>
              </div>
            ))}
          </div>
          <div className="body-comments">
            {selectedImage && (
              <div className="mainer">
                <img src={process.env.PUBLIC_URL +selectedImage.img} alt={selectedImage.title} />
                <h3 className="title-comments">{selectedImage.title}</h3>
                <p className="description-comments" id="p">
                  {selectedImage.description}
                </p>
                <div className="comments">
                  <label htmlFor="comments">Comments</label>
                  {selectedImage.comment && selectedImage.comment.length > 0 ? (
                    selectedImage.comment.map((text, index) => (
                      <p key={index}>{text}</p>
                    ))
                  ) : (
                    <p>No comments available.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
