import React from 'react';

const Friend = ({ friend }) => {
  return (
    <>
      {friend.map((value) => {
        return <h2>{value.name}</h2>;
      })}
    </>
  );
};

export default Friend;
