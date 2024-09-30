
import React, { useReducer } from 'react'
import { MyContext } from './Contex'

const initialState = {
    userName: 'John Doe',
    isLoggedIn: false,
    theme: 'light',
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_USER_NAME':
        return { ...state, userName: action.payload };
      case 'SET_IS_LOGGED_IN':
        return { ...state, isLoggedIn: action.payload };
      case 'SET_THEME':
        return { ...state, theme: action.payload };
      default:
        return state;
    }
  };
  
  const MyProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <MyContext.Provider value={{ state, dispatch }}>
        {children}
      </MyContext.Provider>
    );
  };
  export default MyProvider;
