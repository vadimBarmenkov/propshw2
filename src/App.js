import './App.css';
import {Listing} from "./components/Listing";

function App() {
  var json = require('./res/etsy.json');




  return (
    <div className={"items-list"}><Listing items = {json}/></div>
  );
}

export default App;
