import './App.css';
import Header from './components/Header/Header';
import Home from './components/HomeCaroussel/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Movies from './components/MoviesList/Movies';


function App() {
  return (
    <div >
      <Header/>
      <Home/>
     <Movies/>
    </div>
  );
}

export default App;
