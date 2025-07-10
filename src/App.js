
import './App.css';
import Coundown from './componentes/Countdown/Coundown';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {


  return (

    <div className="App">
      <Coundown targetDate={"2026-06-03"}/>
    </div>

  );
}

export default App;
