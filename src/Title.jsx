import React from 'react';
import { FaDog } from 'react-icons/fa'; // Example for a FontAwesome dog icon

const Title = () => {
  return (
    <header>
      {<FaDog className="logo" />}
      <h1>Furever Friends</h1>
    </header>
  );
};

export default Title;
