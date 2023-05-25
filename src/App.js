//this is whats going to be rendered in react, so we can pass all the componenets here
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Main from './components/Mainpage'
import Signup from './components/Signup'
import Explore from './components/Explore';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Login /> }></Route>
      <Route path='/main' element={ <Main /> }></Route>
      <Route path='/signup' element= { <Signup /> }></Route>
      <Route path='/explore' element= { <Explore /> }></Route>
    </Routes>
  );
}

export default App;