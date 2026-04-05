
import './App.css'

function App() {

  const name = "alawoddin";

  const active = false;
 

  return (
    <>
    {/* <h1>hello world</h1> */}

    {/* <h1>i am alawoddin {20 + 20}</h1> */}

    {/* <h1>the value is {2 * 3}</h1> */}

    <h1 className='myclass' style={{color: "blue"}}>
      hello {20 + 20} {name}
    </h1>

    <button disabled={active}>click me</button>


    </>
  )
}

export default App
