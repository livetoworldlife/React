import React, { useState } from 'react'

export default function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const URL = 'https://dog.ceo/api/breeds/image/random';
  const getDogPhoto = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setDogPhotos([...dogPhotos, data.message]);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      })
  };

  let dogLi = (dogPhotos.length === 0) ? <p>Get your first dog by clicking the button!</p> : dogPhotos.map((dogPhoto, index) => <DogPhoto key={index} dogPhoto={dogPhoto} index={index} />);
  return (
    <div className="dogs">
      <Button onClick={getDogPhoto} />
      {isLoading && <p>Loading...</p>}
      {!isError && <ul>{dogLi}</ul>}
      {isError && <p>Something went wrong</p>}
    </div>
  )
}

function DogPhoto({ dogPhoto, index }) {
  const alt = `${index + 1}. dog photo`;
  return (<li>
    <img src={dogPhoto} alt={alt} width="250" height="200" />
  </li>);
}

const Button = ({ onClick }) => <button onClick={onClick}>Get a dog!</button>;


