import React, { useState, useEffect } from 'react';


export default function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const URL = 'https://official-joke-api.appspot.com/random_joke';

  useEffect(() => {
    async function fetchJoke() {
      try {
        setLoading(true);
        const response = await fetch(URL);
        const data = await response.json();
        const { punchline, setup } = await data;
        setJoke({ punchline, setup });
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchJoke();
  }, []);

  return (
    <div className="joke">
      {isLoading && <p>Loading...</p>}
      {!isError && <Joke joke={joke} />}
      {isError && <p>Something went wrong</p>}
    </div>
  )
}

function Joke({ joke }) {
  return (<>
    <h3>Never run out of jokes with the Random Joke Generator!</h3>
    <p>setup : {joke.setup}</p>
    <p>punchline : {joke.punchline}</p>
  </>
  );
}