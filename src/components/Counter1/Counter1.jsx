import React from 'react'
import useCounter from '../../Hooks/useCounter'

const Counter1 = () => {
  const [increase, decrease, counter] = useCounter(10);
  return (
    <div>
      <h1> {counter} </h1>
      <button onClick={increase} className='m-4 '>   Increase   </button>
      <button onClick={decrease} className='m-4 '>   Decrease   </button>

    </div>
  )
}

export default Counter1