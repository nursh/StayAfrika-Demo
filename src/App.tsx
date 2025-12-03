import "./App.css";
import "@app/styles/Form-Group.css"
import Button from "./components/Button";
import Moment from "./pages/Moment1";
import Moment2 from "./pages/Moment2";
import Moment3 from "./pages/Moment3";
import Moment41 from "./pages/Moment4-1";
import Moment42 from "./pages/Moment4-2";
import Moment51 from "./pages/Moment5-1";
import Moment6 from "./pages/Moment6";
import Moment72 from "./pages/Moment7-2";
import Moment71 from "./pages/Moment7-1";
import Moment8 from "./pages/Moment8";
import Moment9 from "./pages/Moment9";
import MomentFinal from "./pages/MomentFinal";

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
          {/* <Moment41 /> */}
          {/* <Moment42 /> */}
          {/* <Moment51 /> */}
          {/* <Moment6 /> */}
          {/* <Moment71 /> */}
          {/* <Moment72 /> */}
          {/* <Moment8 /> */}
          {/* <Moment9 /> */}
          <MomentFinal />
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
