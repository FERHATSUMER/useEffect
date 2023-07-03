import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ferhat, setFerhat] = useState(0);
  const [sumer, setSumer] = useState(0);

  useEffect(() => {
  console.log(" ilk kez renderda çalışır ,ferhat değiştiğinde çalışır");
}, [ferhat])

useEffect(() => {
  console.log("Her renderda çalışır");
} ) 

useEffect(() => {
  console.log("boş array verirsek sadece ilk çalıştığında çalışır. bir daha çalışmaz.");
}, []) // 


useEffect(() => {
  console.log(" ilk kez renderda çalışır ,ferhat veya sumer değiştiğinde çalışır");
}, [ferhat, sumer])

  return (
    <div className="App">
  <div>
  <button className="ferhat" onClick={()=> setFerhat(ferhat + 1)}>Ferhat ++</button>
  <div>Ferhat:{ferhat}</div>
  </div>
  <div>
  <button className="ferhat" onClick={()=> setSumer(sumer + 1)}>Sümer ++</button>
  <div > Sümer:{sumer}</div>
  </div>

    </div>
  );
}

export default App;
