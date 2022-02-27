import React, { ChangeEvent } from "react";
//import Button from "./Button";
//import Title from "./Title";
import Photo from "./Photo";
// import logo from "./logo.svg";
import "./App.css";
import { KeyboardEvent } from "react";
//import { useState, MouseEvent } from "react";
import TodoList from "./TodoList";

const App = () => {
  //const welcomeText = "Hello World!";
  const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (event.key === "h") {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  return (
    <>
      <div className="App">
        <Photo
          address="https://cdn.crowdpic.net/list-thumb/thumb_l_D623AE308211C3678E61EC0E3FF3C969.jpg"
          description="설명"
        />
      </div>
      <input
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          console.log(event.currentTarget.value)
        }
      />
      <input type="text" onKeyDown={preventKeyDown} />
      <TodoList />
      {/* <input
        type="text"
        onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
          console.log(event.key);
          if (event.key === "h") {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
      /> */}
    </>
  );
};
// const count = 10;
// return (
//   <div className="App">
//     <Title test={welcomeText} />
//     {count > 5 ? <Button name="go" /> : <Button name="back" />}
//   </div>

/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
// </div>

export default App;
