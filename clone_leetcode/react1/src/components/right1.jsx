import React from 'react';
import '../App.css'; // Adjust the path if necessary

const Right1 = () => {
  return (
    <div>
      <img
        className="bell_sym"
        src="https://static-00.iconduck.com/assets.00/bell-icon-428x512-e8b5peda.png"
        alt="Notification Bell"
      />
      <img
        className="fire_sym"
        src="https://t3.ftcdn.net/jpg/05/72/69/70/360_F_572697047_LpgZJsL4LEhPFdTXoT0bU3sitEvh5yG9.jpg"
        alt="Trending Icon"
      />
      <img
        className="profile"
        src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
        alt="User Profile"
      />
      <button className="premium">Premium</button>
    </div>
  );
};

export default Right1;
