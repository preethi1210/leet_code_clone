import React from 'react';
import './App.css';
import Right21 from './components/right21';
import Right22 from './components/right22';
import Right23 from './components/right23';
import Left1 from './components/left1'; 
import Right1 from './components/right1';
import Box from './components/Box';
import StudyPlan from './components/StudyPlan';

class App extends React.Component {
  render() {
    return (
      <>
        <nav className="nav_bar">
          <div className="left_1">
            <Left1 /> 
          </div>
          <div className="right_1">
            <Right1 /> 
          </div>

        </nav>
        <div className="sec">
          <div className="left_2">
            <div>
              <Box />
              <StudyPlan />
            </div>
          </div>
          <div className="right_2" style={{width:'500px',textAlign:'center'}}>
            <Right21 />
            <div style={{ backgroundColor: 'rgb(255,240,200)',width:'200px'}}>
              <Right22 />
              <Right23 />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
