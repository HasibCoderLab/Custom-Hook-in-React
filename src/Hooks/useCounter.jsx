import React, { useState } from 'react'

const useCounter = () => {
   const [counter , setCounter]  = useState(1)
 

//    const handleCount = () =>{
//     setIncrease((increase+1))
//     setDecrease((decrease-1))
//    }
   const   increase  = () =>{
    setCounter((counter+1))
   }

   const   decrease  = () =>{
    setCounter((counter-1))
   }

  return [increase , decrease , counter]
}

export default useCounter