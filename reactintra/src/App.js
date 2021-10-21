import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulaire from "./components/Formulaire/Formulaire";
import ListUser from "./components/ListUser/ListUser";


function App() {
    return (
        <div className="App">
          <Formulaire/>
          <ListUser/>
        </div>
    );
}

export default App;
