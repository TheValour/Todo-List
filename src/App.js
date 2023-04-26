import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Output from './components/Output';

function App() {
  const [goals, setGoal] = useState(["hello", "run", "play"]);
  const inputData = (data) => {
    setGoal((prevGoals) => [...prevGoals, data]);
  };
  
  const deleteData = (data) =>{
    const updatedItems = goals.filter((item, index) => item !== data);
    setGoal(updatedItems)
  }

  return (
    <div className="App flex">
      <h2>Course Goal</h2>
      <Input inputData = {inputData} />
      <br/><br/>
      <Output goals = {goals} deleteData={deleteData}/>
    </div>
  );
}

export default App;
