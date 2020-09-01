import React, { createContext, useReducer } from "react";
import { TestReducer, initialState } from "./../reducers/TestReducer";

export const TestContext = createContext();

const TestContextProvider = (props) => {
  const [test, dispatch] = useReducer(TestReducer, initialState);

  return (
    <TestContext.Provider value={{ test, dispatch }}>
      {props.children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
