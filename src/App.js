import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';

const testData = [
  "List Item 1",
  "List Item 2",
  "List Item 3",
  "List Item 4",
  "List Item 5",
];

const App = function () {
  console.log("Render App Component");
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  const show = function (text) {
    setMessage(text);
    setData(testData);
  };

  const newItems = [];
  for (const item of data) {
    newItems.push(<li>{item}</li>);
  }

  const items = data.map(item =>
    <li>{item}</li>
  );

  return (
    <div className="App">
      <h4>My Bad Search Page</h4>
      <Input label='Hello' onSave={show} text="" />
      <h4>{message}</h4>

      <ul>
        {newItems}
      </ul>

    </div>
  );
};

export default App;
