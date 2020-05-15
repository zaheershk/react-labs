import React, { useState } from "react";
import Person from "../../components/person/person";

const PersonList = () => {
  const [personState, setPersonState] = useState({
    persons: [
      { id: 1, name: "Zak", profession: "Developer", age: 36, showAge: false },
      { id: 2, name: "Sim", profession: "Analyst", age: 31, showAge: false }
    ]
  });

  const ShowAgeHandler = event => {
    setPersonState({
      persons: personState.persons.map(p =>
        event.target.innerHTML.includes(p.name)
          ? { ...p, showAge: !p.showAge }
          : p
      )
    });
  };

  return (
    <div>
      {personState.persons.map(person => {
        return (
          <Person
            key={person.id}
            name={person.name}
            profession={person.profession}
            age={person.age}
            showAge={person.showAge}
            nameClickHandler={ShowAgeHandler}
          />
        );
      })}
    </div>
  );
};

export default PersonList;
