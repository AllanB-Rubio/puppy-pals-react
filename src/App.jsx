import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";

//useState returns an array. And, the array contains two elements. The first is the value that you are storing. The second is a function, which you can use to reset the value.

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList:", puppies);

  // Set the default value to null. So, you can conditionally render an element in your JSX code.

  // How do you set this Id?
  const [featPupId, setFeatPupId] = useState(null);

  // {braces} allow the use of JS or escape into JS
  return (
    <>
      <div className="App">
        {
          // For each puppy, return a <p> tag with the puppy name rendered using .map
          puppies.map((puppy) => {
            const featuredPup = puppies.find((pup) => pup.id === featPupId);
            console.log(featuredPup);

            {
              featPupId && (
                <div> 
                  <h2>{featuredPup.name}</h2> 
                  <ul>
                    <li>Age: {featuredPup.age}</li>
                    <li>Email: {featuredPup.email}</li>
                  </ul>
                </div>
              );
            }
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
          })
        }
      </div>
    </>
  );
}

export default App;
