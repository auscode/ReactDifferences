import './App.css';
import DArray from './Pages/2dArray.jsx';
import Factorial from './Pages/factorial.jsx';
import UsingUseReducer from './Pages/usingUseReducer';
import UsingUseState from './Pages/usingUseState.jsx';

function App() {
  return (
    <>
      <p>by using the usestate</p>
      <UsingUseState />
      <br />
      <br />
      <br />
      <br />
      <p>by using the useReducer</p>
      <UsingUseReducer />


      <DArray/>

      <Factorial/>
    </>
  );
}

export default App;
