import React, {useReducer} from 'react'

const counterReducer = (state, action) => {
    switch(action) {
        case 'decrementar':
            return state - 1
        case 'zerar':
            return 0
        case 'incrementar':
            return state + 1
        default:
            console.log('Ação não válida')
    }
}

const App2 = () => {
    const [counter, dispatch] = useReducer(counterReducer, 0)

    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => dispatch('decrementar')}>-</button>
            <button onClick={() => dispatch('zerar')}>0</button>
            <button onClick={() => dispatch('incrementar')}>+</button>
        </div>
    )
}

export default App2