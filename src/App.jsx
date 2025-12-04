import './App.css';
import Stars from './component/Stars/Stars';
import ListOffers from './component/ListOffers/ListOffers';
// import Store from './component/store/Store'

function App() {
  return (
    <div className="App">
      <div className="Task-1">
        <h2 className="titleTask">Task-1</h2>
        <Stars/>
      </div>

      <div className="Task-2">
        <h2 className="titleTask">Task-2</h2>
        <ListOffers/>
      </div>
    </div>
  );
}

export default App;

