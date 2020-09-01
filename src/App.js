import React, { useContext } from "react";
import { TestContext } from "./context/TestContext";
import { INCREMENT, DECREMENT } from "./reducers/TestReducer";

function App() {
  const { test, dispatch } = useContext(TestContext);

  return (
    <div>
      {test.number}
      <div>
        <button
          onClick={() =>
            dispatch({
              type: INCREMENT,
            })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            dispatch({
              type: DECREMENT,
            })
          }
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
