import React from 'react';

function Hobbies(props) {
  return <li>{props.hobby} &#8688;</li>;
}

function HobbyList() {
  const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
  const hobbyLi = hobbies.map((hobby, key) => <Hobbies key={key} hobby={hobby} />);
  return (
    <div>
      <h1>&#9734;The extreme sports&#9734;</h1>
      <ul>{hobbyLi}</ul>
    </div>
  );
}

export default HobbyList;