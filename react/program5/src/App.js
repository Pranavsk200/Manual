import './App.css';
import React,{ useState} from 'react';

function App() {
  let time = new Date().toLocaleTimeString();

  const [Ctime,setCtime] = useState(time);

  const update = () =>{
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(update,1000)
  return (
    <div className="App">
      <header className="App-header">
        <h1>{Ctime}</h1>
      </header>
    </div>
  );
}

export default App;
