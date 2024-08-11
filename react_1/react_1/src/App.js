import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
    const [value, setValue] = useState("");
    const [arr, setArr] = useState([]);

    function handleChange(e) {
      setValue(e.target.value);
    }

    function addMe() {
        const newArr = [...arr, value];
        setArr(newArr);
        setValue("");
    }

    function deleteMe(index) {
      const newArr = arr.filter((item, i) => i !== index);
      setArr(newArr);
    }
    
    return (
      <div>
        <h1>TO DO LIST</h1>
        <input value={value} type="text" placeholder="Enter your item" onChange={handleChange} />
        <button onClick={()=>addMe()}>Add me</button>
        <ul>
          {arr.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => deleteMe(index)}>Delete me</button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default App;
