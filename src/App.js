import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Main from './components/Mainpage'
import Signup from './components/Signup'
import AuthStateObserver from './components/AuthStates';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Login /> }></Route>
        <Route path='/main' element={ <Main /> }></Route>
        <Route path='/signup' element= { <Signup /> }></Route>
      </Routes>
      <AuthStateObserver />
    </div>
  );
}

export default App;