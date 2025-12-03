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
import { Link, NavLink, Route, Routes, useLocation  } from "react-router";
import { routing } from '@app/utils/routing';

function App() {

  const location = useLocation();
  const routeInfo = routing.find((route) => route.active === location.pathname);
  const next = routeInfo?.next || '/';
  const back = routeInfo?.back || '/'

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
          <Routes>
            <Route index element={<Moment />} />
            <Route path="years" element={<Moment2 />} />
            <Route path="training" element={<Moment3 />} />
            <Route path="location" element={<Moment41 />} />
            <Route path="location-form" element={<Moment42 />} />
            <Route path="work" element={<Moment51 />} />
            <Route path="moment" element={<Moment6 />} />
            <Route path="map-out-moment" element={<Moment71 />} />
            <Route path="activity-form" element={<Moment72 />} />
            <Route path="available-hours" element={<Moment8 />} />
            <Route path="transportation" element={<Moment9 />} />
            <Route path="price" element={<MomentFinal />} />
          </Routes>
        </div>
      </main>

      <footer>
        <NavLink to={next}>
          <Button primary >Next</Button>
        </NavLink>
        <Link to={back}>Back</Link>
      </footer>
    </>
  );
}

export default App;
