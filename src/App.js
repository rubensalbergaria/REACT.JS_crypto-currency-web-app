import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from "axios";


function App() {
  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {  
    Axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=20')
    .then((response) => {
      setCryptoList(response.data['data']);  
      } 
    )
  }, []);

  return (
    <div className="App">
      <div id="header">
        <h1>Cryptoland</h1>
      </div>  

      <div className="cryptolist">
        {cryptoList.map((coin) => {
          return (
          <div>
            <h1>{coin.symbol}</h1>
            <h1>U$ {coin.price_usd}</h1>
            </div>
          );
        })}
      </div>    
    </div>
  );
}

export default App;
