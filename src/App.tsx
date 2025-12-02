import './App.css'
import Button from './components/Button'

function App() {

  return (
    <>
      <header>
        <h1>
          <span className='green'>Stay</span>
          <span className='orange'>Africa</span>
        </h1>
        <Button text="Save & close" />        
      </header>

      <hr />

      <footer>
        <Button text="Next" primary />
        <a>Back</a>
      </footer>
    </>
  )
}

export default App
