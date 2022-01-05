import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/card.jsx'

function App() {
  return (
    <div className="App">
     <span className="fondoNegro">Hola mundo</span>
     <button type="button" class="btn btn-primary">
       Primary
      </button>
      <Card/>
    </div>
  );
}

export default App;
