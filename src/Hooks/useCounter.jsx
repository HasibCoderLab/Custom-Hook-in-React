import React, { useState } from 'react'

const useCounter = (InitialValue = 0) => {
    const [counter, setCounter] = useState(InitialValue);
    // ============Functios================
    const increase = () => {
        setCounter((counter + 1))
    }

    const decrease = () => {
        setCounter((counter - 1))
    }

    return [increase, decrease, counter]
}
export default useCounter