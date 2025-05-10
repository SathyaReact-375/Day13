import { useState } from 'react'

function useCounterhook(initial) {
    const[Count,SetCount]=useState(0)
    const increament=()=>SetCount((pre)=>pre+1)
    const decreament=()=>SetCount((pre)=>pre-1)
    const reset=()=>SetCount(0)
    return {Count,SetCount,increament,decreament,reset}
}

export default useCounterhook