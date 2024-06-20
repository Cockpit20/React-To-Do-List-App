import React, { useState } from "react";
import List from "./List";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
  const [listItem, setListItem] = useState("");
  const [listItems, setListItems] = useState([]);

  function handleChange(event) {
    setListItem(event.target.value);
  }

  function handleClick(event) {
    setListItems((prev) => {
      return [...prev, listItem];
    });
    setListItem("");
  }

  function deleteItem(id) {
    setListItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id
      })
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={listItem} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((listItem, index) => (
            <List key={index}
              id={index}
              onChecked={deleteItem} listedItem={listItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
