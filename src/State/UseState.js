import { useState, Fragment } from "react";

function Greeting() {
  const [name, setName] = useState("Albus Dumbledore");
  const [age, setAge] = useState(175);
  console.log(name)
  console.log(age)
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleAgeChange(e) {
    setAge(e.target.value);
  }
  return (
    <Fragment>
      <section className="row">
        <span>Name</span>
        <input type="text" value={name} onChange={handleNameChange} />
      </section>
      <section className="row">
        <span>Age</span>
        <input type="text" value={age} onChange={handleAgeChange} />
      </section>
    </Fragment>
  );
}


export default Greeting
