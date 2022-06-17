import { useState } from 'react';
import './App.sass';

function App() {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount(count + 1);
  };
  return (
    <section>
      <button onClick={clickHandler}>Click Me</button>

      <div className="lbl_count">Count:{count}</div>
    </section>
  );
}

export default App;
