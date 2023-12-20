import React, { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers';
import { CHANGE_OPERATION, addMemory, addOne, applyNumber, clearMemory, clearNumber } from './actions';

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)

  const handlerClick=(e)=>{
    const number =e.target.value;
    dispatch(applyNumber(number))
  }
  const handlerOperation=(e)=>{
       const operation=e.target.value;
       dispatch({type:CHANGE_OPERATION,payload:operation})
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>

            <div className="row">
              <CalcButton onClick={()=>dispatch(addMemory())} value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton onClick={()=>dispatch(clearMemory())} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handlerClick} />
              <CalcButton value={2} onClick={handlerClick} />
              <CalcButton value={3} onClick={handlerClick} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handlerClick} />
              <CalcButton value={5} onClick={handlerClick} />
              <CalcButton value={6} onClick={handlerClick} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handlerClick} />
              <CalcButton value={8} onClick={handlerClick} />
              <CalcButton value={9} onClick={handlerClick} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handlerOperation} />
              <CalcButton value={"*"} onClick={handlerOperation} />
              <CalcButton value={"-"} onClick={handlerOperation} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=>dispatch(clearNumber())} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
