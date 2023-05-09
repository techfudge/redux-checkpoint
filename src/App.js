import './App.css';
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
