
import './App.css';
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";

function App() {
  const personName = {
    first:'Bruce', 
    last: 'Wayne' 
  }

  const nameList = [
    { 
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]
  return <div className="App">

  </div>;
}

export default App;
