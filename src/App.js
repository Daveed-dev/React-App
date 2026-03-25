import React, { useState } from 'react';
import Friend from './Friend';

const data = [
  {
    id: 1,
    name: 'david',
  },
  {
    id: 2,
    name: 'james',
  },
  {
    id: 3,
    name: 'dapo',
  },
  {
    id: 4,
    name: 'koolz',
  },
];

const App = () => {
  const [friends, setfriends] = useState(data);
  return (
    <>
      <div className='app'>
        <h3>Number of Friends : {friends.length} </h3>
        <Friend friend={friends} />

        <button className='btn' onClick={() => setfriends([])}>
          clear all
        </button>
        <button className='btn' onClick={() => setfriends(data)}>
          get all
        </button>
      </div>
    </>
  );
};

export default App;
