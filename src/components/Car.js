import React from 'react';
import { useParams } from 'react-router-dom';

const Car = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Hello world!</h1>
      <h2>This is the id : {id}</h2>
    </div>
  );
};

export default Car;
