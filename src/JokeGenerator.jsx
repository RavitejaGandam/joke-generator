import axios from "axios";
import React from "react";
import { useState } from "react";

function JokeGenerator() {
  let [joke, setJoke] = useState("");

  const getData = async () => {
    try {
      let response = await axios.get(
        `https://sv443.net/jokeapi/v2/joke/Programming?type=single`
      );
      console.log(response.data);
      setJoke(response.data.joke);
    } catch (error) {
      console.log(`error occured`, error);
    }
  };
  return (
    <div>
      <h1>Here is our Joke Generator</h1>

      <button onClick={getData}>Click To Generate A Joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default JokeGenerator;
