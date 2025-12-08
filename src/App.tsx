import './App.css';
import Stars from './component/Stars/Stars.tsx';
import ListOffers from './component/ListOffers/ListOffers.tsx';

function App() {

  return (
    <div className="App">
      <div className="Task-1">
        <h2 className="titleTask">Task-1</h2>
        <Stars count={3} />
      </div> 
      <div className="Task-2">
        <h2 className="titleTask">Task-2</h2>
        <ListOffers />
      </div>
    </div>
  );
}

export default App;

