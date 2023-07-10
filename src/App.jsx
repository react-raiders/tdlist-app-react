import logo from './logo.svg';
import './App.css';
import ListContainer from './list/ListContainer.jsx';
import ItemContainer from './item/ItemContainer.jsx'
import Home from './Home.jsx';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="lists" element={ <ListContainer /> } />
        <Route path="items" element={ <ItemContainer /> } />
      </Routes>
    </div>
  );
}

export default App;
