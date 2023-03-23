import logo from './logo.svg';
import './App.css';
import {useState} from 'react'



function App() {

  const [input, setInput] = useState("")
  const [age, setAge] = useState(null)

  const clickHandler = (e) => {
    e.preventDefault();
    setAge((parseInt(input)*365))
  }

  const onChangeHandler = (e) => {
    setInput(e.target.value)
  }
  const restartHandler = () => {
      setInput("")
      setAge(null)

  } 


  return (
    <div className="App">
      <header className="App-header">

        {age ? (<h1>You are at least {age} days old </h1>): 
        ( <img src={logo} className="App-logo" alt="logo" />)}
       
        <p>
         Hello this app is meant to turn your age into days

        </p>
        <form>
          <input onChange={onChangeHandler} name="age" value={input} type="text"  placeholder="put your age here"></input>
          <input onClick={clickHandler} type="button" value="Turn My Age Into Days"></input> <br></br>
          <input type="button" value="Restart" onClick={restartHandler}></input>
        </form>
      </header>
    </div>
  );
}

export default App;
