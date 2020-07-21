import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  const incrementCount = () => setCount(count + 1);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting.......";
  
  const Count = ({ count }) => <div className="counter">{count}</div>;
  const Button = ({ onClick }) => <button onClick={onClick}>Add 1!</button>;
  
  return (
    <div className="counter-container">
      <p>{feedback}</p>
      <Button onClick={incrementCount} />
      <Count count={count} />
    </div>
  )
}
