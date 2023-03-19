//this is whats going to be rendered in react, so we can pass all the componenets here
import './App.css'
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';


function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default App;
