//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy, decrementBy } from './store/slices/counter'

function App() {
  //const [count, setCount] = useState(0)
  //vamos a empezar a usa redux, en el callback le digo que del state, tome el objeto counter
  // y lo desestructuro 
  const { counter } = useSelector( state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter : {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() )}>
          +1
        </button>
        <button onClick={() => dispatch( decrement() )}>
          -1
        </button>
        <button onClick={() => dispatch( incrementBy(5) )}>
          IncrementBy5
        </button>
        <button onClick={() => dispatch( decrementBy(5) )}>
          DecrementBy5
        </button>
      </div>
    </div>
  )
}

export default App
