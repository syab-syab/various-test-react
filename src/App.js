import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './redux/counterSlice';
import { useState } from 'react';
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';

function App() {
  // sotore.jsの中にあるcounterの値→counterSliceの中のvalueの値のこと
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("2");
  return (
    <div className="App">
      {/* <Header />
      <Main />
      <Footer /> */}
      <h1>count: {count}</h1>
      <input onChange={(e) => setIncrementAmount(e.target.value)} value={incrementAmount} />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      >
        追加
      </button>

    </div>
  );
}

export default App;
