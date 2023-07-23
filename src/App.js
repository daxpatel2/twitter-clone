//this is whats going to be rendered in react, so we can pass all the componenets here
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Main from './components/Mainpage'
import Signup from './components/Signup'
import AuthStateObserver from './components/AuthStates';

// useEffect(() => {
//   // Subscribe to the authentication state changes
//   // You can perform your logic for redirecting to '/main' here
//   // For example, if the user is authenticated, navigate to '/main'
//   // You can also add more complex logic here based on your requirements
//   // For instance, you might check a state variable or context to determine the redirect behavior.
//   // In this example, the navigation to '/main' will happen when the user is authenticated.
//   const unsubscribe = auth.onAuthStateChanged((user) => {
//     if (user) {
//       navigate('/main');
//     }
//   });

//   // Clean up the observer when the component unmounts
//   return () => unsubscribe();
// }, [navigate]);

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