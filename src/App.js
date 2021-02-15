import { useState } from 'react';
import './App.css';

const data = [
  { id: 1, text: "Item 1" },
  { id: 2, text: "Item 2" },
  { id: 3, text: "Item 3" },
  { id: 4, text: "Item 4" },
];

// Our Button Component
const Button = function (props) {

  // We're not doing any setup here. 
  // Just showing an html button
  return (
    <button onClick={props.onClick}>{props.text}</button>
  );
};

// Our App (main) Component
const App = function () {
  console.log("rendering App component");

  const [inputValue, setInputValue] = useState("");
  const [listData, setlistData] = useState([]);

  const onButtonClick = function () {
    setlistData(data);
  };

  const onInputChange = function (event) {
    setInputValue(event.target.value);
    console.log(event.target.value);
    // console.log(inputValue);
  };

  const text = "Search";

  // Here's the star of our show so we'll put just before the curtain lifts
  const mappedList = listData.map(item => {
    return <li key={item.id}>{item.text}</li>;
  });

  // Its Showtime !
  return (
    <div className="App">

      <Button text="New Button" onClick={onButtonClick} />

      <input type="text" onChange={onInputChange} value={inputValue} />
      <button onClick={onButtonClick}>{text}</button>
      <ul id="container">
        {mappedList}
      </ul>

    </div>
  );
};

export default App;