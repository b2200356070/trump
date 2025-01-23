import React, { useState } from "react";

<img className="avatar" />;
const trump = {
  name: "Donald J. Trump",
  title: "POTUS",
};

function AboutPage() {
  const handleClick = () => {
    alert("Heil!");
    setNumberOfPresidency(2);
  };
  const [numberOfPresidency, setNumberOfPresidency] = useState(1);
  return (
    <div className="container">
      <h1>About {trump.name}</h1>
      <p>
        MAGA
        <br />
        {trump.title}
        <br />
        Has been a president for {numberOfPresidency} times
      </p>
      <img
        className="trump"
        src="https://www.whitehouse.gov/wp-content/uploads/2025/01/Donald-J-Trump.jpg"
      ></img>
      <button onClick={handleClick} className="button">
        Click here to salute the all mighty {trump.title}
      </button>
    </div>
  );
}
export default function MyApp() {
  return (
    <>
      <AboutPage/>
    </>
  );
}
