import useCounterhook from './useCounterhook'
function Task1() {

    const{Count,increament,decreament,reset}=useCounterhook(0)

  return (
    <>
    <div style={{textAlign:"center"}}>
    <h1>Task1</h1>
    <p>{Count}</p>
    <button onClick={increament}>+</button>
    <button onClick={decreament}>-</button>
    <button onClick={reset}>0</button>
    </div>
    </>
  )
}

export default Task1