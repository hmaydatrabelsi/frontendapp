import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from "react";
const UNSPLASH_KEY=process.env.REACT_APP_UNSPLASH_KEY;
function App() {
  const [word, setword] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
    .then((res)=>res.json())
    .then((data)=>{console.log(data);})
    .catch((err)=>{console.log(err);})
    setword('');
  }

  return (
    <div className="App">
      <Header title="images haha " />
      <Search word={word} setword={setword} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
