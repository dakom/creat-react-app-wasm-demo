import {useEffect, useContext, FormEvent, useState} from 'react';
import './App.css';
import {ContractContext} from './Context';
import {useInput} from './form';
function App() {
  const wasm = useContext(ContractContext);

  const inputA = useInput('40');
  const inputB = useInput('2');
 
  const [res, setRes] = useState(NaN);

  const handleSubmit = (evt:FormEvent<HTMLFormElement>) => {
      evt.preventDefault();

      setRes(wasm.add(parseInt(inputA.value), parseInt(inputB.value)))
  }

  return (
    <div className="app" >
      <form className="form" onSubmit={handleSubmit}>
        <label>
          A:
          <input type="text" value={inputA.value} onChange={inputA.onChange} />
        </label>
        <br/> 
        <label>
          B:
          <input type="text" value={inputB.value} onChange={inputB.onChange} />
        </label>
        <br/> 
        <input type="submit" value="Submit" />
      </form>
      {!isNaN(res) && <div>RESULT: {res}</div>}
    </div>
  );
}
//{res}

export default App;
