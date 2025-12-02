import './App.css'
import Button from './components/Button'
import Moment from './pages/Moment'

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

      <progress max="100" value="10"> </progress>

      <>
        <Moment />
      </>
      
      <hr />

      <footer>
        <Button text="Next" primary />
        <a>Back</a>
      </footer>
    </>
  )
}

export default App
