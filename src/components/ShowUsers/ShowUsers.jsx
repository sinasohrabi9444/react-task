import React, { useEffect, useState } from "react";
import "./ShowUsers.css";
export default function ShowUsers() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  const [usersData, setUsersData] = useState([
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
  ]);
  return (
    <div className="containe-show-users">
      <div className="show-users-title">
        <h4>Show Users With Functional Components</h4>
      </div>

      <div className="body-show-users">
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          usersData.map((user) => (
            <div className="show-users">
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
