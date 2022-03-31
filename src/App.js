import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { signIn, signOut } from './actions/isLogged';
import Counter from './Component/Counter';

function App() {
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Hello USER, Wellcome!!</h1>
      { isLogged ? <Counter/> : <h2>Sign In to use Counter</h2> }
      <div>
        { isLogged ?
          <button onClick={() => dispatch(signOut())}>Sign-out</button>:
          <button onClick={() => dispatch(signIn())}>Sign-in</button>
        }
      </div>
    </div>
  );
}

export default App;
