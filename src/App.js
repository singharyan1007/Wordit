import './App.css';
import {useEffect,useState} from 'react';
import Wordle from './components/Wordle';
function App() {
  const [solution, setSolution] = useState(null)
  
  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        // random int between 0 & 14
        const randomSolution = json[Math.floor(Math.random()*json.length)]
        setSolution(randomSolution.word)
      })
  }, [setSolution])
  return (
    <div className="App">
      <h1>WordIT</h1>
      {/* {solution && <div>Solution is :{solution}</div>} */}
      {solution && <Wordle solution={solution}/>}
      {/* This is done to ensure that only when solution is present then the output is printed */}

    </div>
  );
}

export default App;
