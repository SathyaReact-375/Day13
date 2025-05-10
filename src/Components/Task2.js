import useTogglehook from "./useTogglehook"

function Task2() {

    const{isOpen,togglebutton}=useTogglehook(true)
 
    return (
    <>
    <div style={{textAlign:"center"}}>
    <h1>Task2</h1>
    <p>{isOpen?"true":"false"}</p>
    <button onClick={togglebutton}>toggle</button>
    
    </div>
    </>
  )
}

export default Task2