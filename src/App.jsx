import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";

//useState returns an array. And, the array contains two elements. The first is the value that you are storing. The second is a function, which you can use to reset the value.

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  // Set the default value to null. So, you can conditionally render an element in your JSX code.
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  // console.log("puppyList:", puppies);

  // {braces} allow the use of JS or escape into JS
  return (
    <>
      <h1>Puppy Pals</h1>
      <div className="App">
        {featPupId && (
          <div className="card">
            
            <h2>{featuredPup.name}</h2>
            <h3>Information: </h3>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setFeatPupId(puppy.id);
              }} //tracking Id via useState
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;
