import React from ".../../react";
import "./person.css";

const Person = props => {
  return (
    <div className="person">
      <h1 className="person-name" onClick={props.nameClickHandler}>
        Name: {props.name}
      </h1>
      <h3>Profession: {props.profession}</h3>
      {props.showAge ? <h3>Age: {props.age}</h3> : null}
    </div>
  );
};

export default Person;
