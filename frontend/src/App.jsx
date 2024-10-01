import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header/>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={async() => {
          const res = await fetch('http://localhost:3000/users')
          const data = await res.json()
          console.log(data)
        }}>
          Users
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Ahora se modifico el deploy otra vez</p>
    </>
  )
}

export default App
