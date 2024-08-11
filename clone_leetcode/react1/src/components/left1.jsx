import React, { useState } from 'react';
import '../App.css'; // Adjust path if needed

const Left1 = () => {
  const [activeLink, setActiveLink] = useState('explore'); // Default active link

  const handleClick = (link) => {
    setActiveLink(link); // Set the clicked link as active
  };

  return (
    <div className="nav_bar">
      <img
        className="leetcode_sym"
        src="https://preview.redd.it/i-have-been-leetcoding-for-a-while-but-what-does-the-v0-ucy9q7w40wtc1.jpg?width=720&format=pjpg&auto=webp&s=41e11a55faf86e0b7bbbddf934b906212caa0fa9"
        alt="LeetCode Symbol"
      />
      <a 
        className={`explore ${activeLink === 'explore' ? 'active' : ''}`} 
        onClick={() => handleClick('explore')} 
        href="#"
      >
        Explore
      </a>
      <a 
        className={`problem ${activeLink === 'problem' ? 'active' : ''}`} 
        onClick={() => handleClick('problem')} 
        href="#"
      >
        Problems
      </a>
      <a 
        className={`contest ${activeLink === 'contest' ? 'active' : ''}`} 
        onClick={() => handleClick('contest')} 
        href="#"
      >
        Contest
      </a>
      <a 
        className={`discuss ${activeLink === 'discuss' ? 'active' : ''}`} 
        onClick={() => handleClick('discuss')} 
        href="#"
      >
        Discuss
      </a>
      <a 
        className={`interview ${activeLink === 'interview' ? 'active' : ''}`} 
        onClick={() => handleClick('interview')} 
        href="#"
      >
        Interview
      </a>
      <a 
        className={`store ${activeLink === 'store' ? 'active' : ''}`} 
        onClick={() => handleClick('store')} 
        href="#"
      >
        Store
      </a>
    </div>
  );
};

export default Left1;
