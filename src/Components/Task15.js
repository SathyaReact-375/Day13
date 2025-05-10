import React from 'react'
import useTogglehook from './useTogglehook'

function Task15() {
    const {isOpen, togglebutton} = useTogglehook(true)
    
    document.body.style.backgroundColor = isOpen ? "#121212" : "#FFFFFF";
    document.body.style.color = isOpen ? "#FFFFFF" : "#121212";
    
    return (
        <>
            <div style={{textAlign: "center"}}>
                <h1>Task15</h1>
                <button onClick={togglebutton}>toggle</button>
            </div>
        </>
    )
}

export default Task15