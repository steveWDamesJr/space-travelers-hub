import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRockets } from './rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets({ limit: 5 }));
  }, [dispatch]);

  return (
    <div>
      <h1>posts...</h1>
    </div>
  );
};

export default Rockets;
