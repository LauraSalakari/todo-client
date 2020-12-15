import {useState} from "react"
import './App.css';
import MyHeader from './components/MyHeader';
import TodoList from './components/TodoList';
import TodoItems from "./components/TodoItems"
import CreateList from "./components/CreateList";

function App() {

  const [showPopup, setshowPopup] = useState(false)

  const handlePopup = () => {
    setshowPopup(!showPopup)
    console.log("popup clicked!")
  }

  const handleAddList = (e) => {
    e.preventDefault();
    console.log(e.target)
  }


  return (
    <div className="App">
      <MyHeader />
      <div className="row">
        <TodoList openPopup={handlePopup}/>
        <TodoItems />
        {showPopup ? <CreateList addList={handleAddList} closePopup={handlePopup}/> : null}
      </div>
    </div>
  );
}

export default App;
