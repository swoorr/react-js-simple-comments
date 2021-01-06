import logo from './logo.svg';
import './App.scss';
import Body from "./lib/Body";

const user = {
  first: "Furkan",
  last: "Sahin"
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {user.first} {user.last}
        </p>
      </header>
      <div className="container">
        <Body /> 
      </div>
    </div>
  );
}

export default App;
