import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log(`before setState: ${count}`);

    setCount(count + 1);

    console.log(`after setState: ${count}`);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <button 
        onClick={increment}
        style={{ 
          backgroundColor: 'green',
          fontSize: '200px',
          borderRadius: '80px',
          padding: '10px 20px',
        }}
      >
        {count}
      </button>
    </div>
  );
  
  
}
export default Counter