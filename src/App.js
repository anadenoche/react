
import './App.css';
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <ItemListContainer greetings="hola"/>
    </div>
  );
}

export default App;

