import React, { useState } from "react";

const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>This is header : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Header;
