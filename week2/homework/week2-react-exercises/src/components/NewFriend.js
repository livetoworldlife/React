import React, { useState } from 'react'

export default function Friend() {
  const [friend, setFriend] = useState({});
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const URL = 'https://www.randomuser.me/api?results=1';
  const getFriend = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        const { name: { first, last },
          location: { city, country },
          email,
          phone } = data.results[0];

        const newFriend = { first, last, city, country, email, phone };
        setFriend(newFriend);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      })
  };

  return (
    <div className="friend" >
      <Button onClick={getFriend} />
      {isLoading && <p>Loading...</p>}
      {!isError && <FriendProfile friend={friend} />}
      {isError && <p>Something went wrong</p>}
    </div>
  )
}

function FriendProfile({ friend }) {
  return (<ul>
    <li>name : {friend.first}</li>
    <li>surname : {friend.last}</li>
    <li>address : {friend.city}</li>
    <li>country : {friend.country}</li>
    <li>email : {friend.email}</li>
    <li>phone : {friend.phone}</li>
  </ul>);
}

const Button = ({ onClick }) => <button onClick={onClick}>Get a friend!</button>;


