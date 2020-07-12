import React, { useState } from 'react'

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

export default function Search() {
  const [cityName, setCityName] = useState("");
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const fetchCity = () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    //alert(URL);
    fetch(URL)
      .then(res => alert(res))
      .catch(err => {
        setError(true);
        setLoading(false);
      })
  };
  return (
    <div>
      <form onSubmit={fetchCity}>
        <input type="text"
          value={cityName}
          onChange={event => {
            event.preventDefault();
            const value = event.target.value;
            setCityName(value);
          }}
          placeholder="Search City..." name="search" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}



const Button = ({ onClick }) => <button onClick={onClick} type="submit" value="Submit">Submit</button>;