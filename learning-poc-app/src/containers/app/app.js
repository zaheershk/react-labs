import React from "react";
import "./app.css";
import PersonList from "../person/personlist";

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="header">My React App!</h1>
      </div>
      <PersonList />
    </div>
  );
}

export default App;
