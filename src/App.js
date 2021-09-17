import React, {useReducer} from 'react'

export const contador = (state, action) => {
  if(action.type==='increment') 
    return {count: state.count + 1}
  if(action.type==='decrement')
    return {count: state.count - 1}
}

const App = () => {
  let [counter, dispatch] = useReducer(contador, {count: 0})

  return (
    <div>
      <p>{counter['count']}</p>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </div>
  );
}

export default App;
