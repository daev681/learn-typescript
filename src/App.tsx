
import './App.css';
import { Greet } from "./components/example/typeScriptEx/Greet";
import { Person } from "./components/example/typeScriptEx/Person";
import { PersonList } from "./components/example/typeScriptEx/PersonList";
import { Heading } from "./components/example/typeScriptEx/Heading";
import { Oscar } from "./components/example/typeScriptEx/Oscar";
import { Button } from "./components/example/typeScriptEx/Button";
import TodoList from "./components/todo-reducer/TodoList";

function App() {

  return <div className="App">
    <TodoList/>
  </div>;
}

export default App;
