import "./App.css";
import "@app/styles/Form-Group.css"
import Button from "./components/Button";
import Moment from "./pages/Moment1";
import Moment2 from "./pages/Moment2";
import Moment3 from "./pages/Moment3";
import Moment41 from "./pages/Moment4-1";

function App() {
  return (
    <>
      <main>
        <div className="header-container">
          <header>
            <h1>
              <span className="green">Stay</span>
              <span className="orange">Afrika</span>
            </h1>
            <Button>Save & close</Button>
          </header>

          <progress max="100" value="10">
            {" "}
          </progress>
        </div>

        <div className="container">
          {/* <Moment /> */}
          {/* <Moment2 /> */}
          {/* <Moment3 /> */}
          <Moment41 />
        </div>
      </main>

      <footer>
        <Button primary>Next</Button>
        <a>Back</a>
      </footer>
    </>
  );
}

export default App;
