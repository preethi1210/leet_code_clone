import React from 'react';
import img1 from '../Asserts/top.png';
import img2 from '../Asserts/leetcode75.png';
import img3 from '../Asserts/sql.png';
import img4 from '../Asserts/javascript.png';
import img5 from '../Asserts/leetcode75.png'; // Verify if this image is correct
import img6 from '../Asserts/amazon.png';

import Grid from './CardStudyPlan'; // Ensure this path and component are correct
import './grids.css';

const StudyPlan = () => {
  return (
    <div style={{ justifyContent: 'space-between',display:'flex',width:'80%' }}>
    <div>
<h2 style={{ color: 'rgb(113, 110, 110)' }}>Study Plan</h2>
      <div className="main">
        <Grid img={img1} desc={"Must-do List for Interview Prep"} title={"Top Interview 150"} />
        <Grid img={img2} desc={"Ace Coding Interview with 75 Qs"} title={"LeetCode 75"} />
        <Grid img={img3} desc={"Crack SQL Interview in 50 Qs"} title={"SQL 50"} />
        <Grid img={img4} desc={"Learn Basic Pandas in 15 Qs"} title={"Introduction to Pandas"} />
        <Grid img={img5} desc={"Amazon Spring '23 High Frequency"} title={"Amazon Spring '23 High Frequency"} />
        <Grid img={img6} desc={"Learn JS Basics with 30 Qs"} title={"30 Days of JavaScript"} />
      </div>
      </div>
      <div style={{ fontSize: '15px', color: 'blue',cursor:'pointer' }}>
  See all
</div>

    </div>
  );
}

export default StudyPlan;
