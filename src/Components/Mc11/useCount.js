import React, { useEffect, useState } from 'react'

function useCount() {
 const [count,setCount] = useState(0);

 useEffect(()=>{
    setCount(5)
 },[])

 return count;

}

export default useCount