import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const clickToCount = () => setCount(count + 1);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting.......";
  return (
    <div className="counter-container">
      <p>{feedback}</p>
      <Button onClick={clickToCount} />
      <Count count={count} />
    </div>
  )
}

function Count(props) {
  const { count } = prop;
  return (<div className="counter">{count}</div>);
}

function Button(props) {
  const { onClick } = prop;
  return (
    <button onClick={onClick}>Add 1!</button>);
}
