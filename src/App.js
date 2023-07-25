import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './redux/counterSlice';
import './App.css';
// import { useState } from 'react';

function App() {
  // useSelector Hookを利用することで
  // counterSliceで設定したcountの値を取得できる
  // stateの後に指定しているcounterは
  // store.jsのreducerに設定したオブジェクトのプロパティのcounterに対応する
  const count = useSelector((state) => state.counter.count);

  // countの値をイジるにはAction creatorsを呼び出して
  // それを呼び出すためにuseDispatchが必要になる
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      {/* Action creatorsはcounterSlice.jsでexportしているので */}
      {/* それをimportして使う */}
      <button onClick={() => dispatch(increase())}>Up</button>
      <button onClick={() => dispatch(decrease())}>Down</button>

    </div>
  );
}

export default App;
