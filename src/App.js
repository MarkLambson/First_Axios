import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AxiosAPI from './components/AxiosAPI';
import UseEffectAPI from './components/UseEffectAPI';
// import FetchAPI from './components/FetchAPI';

function App() {
  return (
    <div className="App">
      <h1>API Lecture</h1>
      {/* <FetchAPI /> */}
      {/* <AxiosAPI /> */}
      <UseEffectAPI />
    </div>
  );
}

export default App;
