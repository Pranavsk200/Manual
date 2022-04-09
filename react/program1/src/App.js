import React, { useState } from 'react';
 
function App() {
  const [click, setClick] = useState(0);
  // using array destructuring here
  // to assign initial value 0
  // to click and a reference to the function
  // that updates click to setClick
  return (
    <div>
      <div> 
        <p>You've clicked {click} times!</p>
        <p>The number of times you have clicked
        is {click%2==0?'even!':'odd!'}</p>
          <button onClick={() => setClick(click => click + 1)}>
            Click me
          </button>
      </div>
    </div>
  );
}
 
export default App;
