import React, { useState } from 'react' 
// An object called messages
export const initialState = {
  matriz:[],
  solution:[]
}

export const Context = React.createContext();

export const StateContext = (props) =>{
  const [globalState,setGlobalState] = useState(initialState)
  return (
    <Context.Provider value={ [globalState,setGlobalState]}>
      {props.children}
    </Context.Provider>
  )
}