import { useState } from 'react'

function useTogglehook(val) {
 const[isOpen,Settoggle]=useState(true)
 const togglebutton=()=>Settoggle((pre)=>!pre)
 return {isOpen,Settoggle,togglebutton}
}

export default useTogglehook