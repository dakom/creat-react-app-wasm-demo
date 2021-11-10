import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import React, {useEffect, useState, useContext} from 'react';
import {ContractContext} from './Context';
import IWasm from 'my-lib';

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

function Index() {
  const [wasm, setWasm]:[typeof IWasm, any] = useState(null as any);

  useEffect(() => {
    import("my-lib")
      .then(module => setWasm(module))
  }, []);

  return (
    <ContractContext.Provider value={wasm} >
      {wasm && <App/>}
    </ContractContext.Provider>
  );
}