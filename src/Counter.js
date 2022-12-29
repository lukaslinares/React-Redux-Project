import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'

function Counter() {
    //Call useSelector to grab current value of our state variable from store, and assign it to a variable named 'count'
    const count = useSelector(state => state.value)
    // Include the useDispatch hook
    const dispatch = useDispatch()
    const [ input, setInput ] = useState(0)

    const byAmountSubmit = e => {
        e.preventDefault()
        console.log(input)
        dispatch(incrementByAmount(+input))
    }

    return (
        <>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <form onSubmit={e => byAmountSubmit(e)}>
                <input type='number' onChange={e => setInput(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>

        </>
    )
}

export default Counter 