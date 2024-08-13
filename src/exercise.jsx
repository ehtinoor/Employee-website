import React, { useState } from 'react';

const Exercise = () => {
  const [value, setValue] = useState(0);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return (
    <form>
      <div>
        <input type="text" readOnly value={value} />
      </div>
      <div>
        <button type="button" onClick={increment}>+</button>
        <button type="button" onClick={decrement}>-</button>
      </div>
    </form>
  );
};

export default Exercise;
