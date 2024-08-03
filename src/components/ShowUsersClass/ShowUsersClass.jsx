import React, { Component } from "react";
import "./ShowUsersClass.css";

export default class ShowUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      usersData: [
        {
          id: 1,
          name: "Lily Thompson",
          job: "UX/UI Designer",
        },
        {
          id: 2,
          name: "William Johnson",
          job: "Data Scientist",
        },
        {
          id: 3,
          name: "Olivia White",
          job: "Cybersecurity Analyst",
        },
        {
          id: 4,
          name: "Ethan Carter",
          job: "Full Stack Developer",
        },
      ],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    const { isLoading, usersData } = this.state;

    return (
      <div className="containe-show-users">
        <div className="show-users-title">
          <h4>Show Users With Class Components</h4>
        </div>

        <div className="body-show-users">
          {isLoading ? (
            <div>Loading ...</div>
          ) : (
            usersData.map((user) => (
              <div className="show-users" key={user.id}>
                <h4>{user.name}</h4>
                <span>my name is {user.name}</span>
                <span className="job">{user.job}</span>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}
