import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
const UNSPLACH_KEY=process.env.REACT_APP_UNSPLACH_KEY;
function App() {
  const [word, setword] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLACH_KEY}`)
    .Then((res)=>res.json())
    .then((data)=>{console.log(data);})
    .catch((err)=>{console.log(err);})
  };

  return (
    <div className="App">
      <Header title="images haha " />
      <Search word={word} setword={setword} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
