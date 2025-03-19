import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
  return (
    <header>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </header>
  )
}

const optionsList: String[] = ['count is', 'number of clicks', 'hits'];

function getRamdonInt(max: any) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const [count, setCount] = useState(0)
  const optionString: String = optionsList[getRamdonInt(optionsList.length - 1)]

  return (
    <>
      <Header/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {optionString} {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
