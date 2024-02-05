import './App.css';
import Login from './Login';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './Signup';
import Home from './Home';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/sign' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
