import "./App.css";
import Button from "./components/Button";
import Moment from "./pages/Moment1";

function App() {
  return (
    <>
      <div className="header-container">
        <header>
          <h1>
            <span className="green">Stay</span>
            <span className="orange">Africa</span>
          </h1>
          <Button text="Save & close" />
        </header>

        <progress max="100" value="10">
          {" "}
        </progress>
      </div>

      <div className="container">
        <Moment />
      </div>

      <footer>
        <Button text="Next" primary />
        <a>Back</a>
      </footer>
    </>
  );
}

export default App;
