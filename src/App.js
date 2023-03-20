//this is whats going to be rendered in react, so we can pass all the componenets here
import './App.css'
// import Feed from './components/Mainpage/Feed';
// import Sidebar from './components/Mainpage/Sidebar';
// import Widget from './components/Mainpage/Widget';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Main from './components/Mainpage'



function App() {
  return (
    <Routes>
      <Route path='/' element={ <Login /> }></Route>
      <Route path='main' element={ <Main /> }></Route>
    </Routes>
    
  );
}

export default App;


// //<div className='app'>
// <Sidebar />
// <Feed />
// <Widget />
// </div>