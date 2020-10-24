import React from 'react';
import TextField from "./components/TextField";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <div></div>
      <Button text="submit" bColor="#FFFFFF" width={300}
              fn={() => console.log("submitted")}/>
      <Counter>
        {(count, setCount) =>
          (<div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>)}
      </Counter>
    </>
  );
}

export default App;
