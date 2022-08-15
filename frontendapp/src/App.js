import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react';


function App() {
  const [word,setword]=useState('');
  const handleSearchSubmit=(e)=>{
    e.preventDefault();
    console.log(word);
  }
  
  return (
    <div className="App">
      < Header title="images haha "/>
      <Search word={word} setword={setword} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
