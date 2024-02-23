import Head from "./components/Head";
import "./App.css";
import Body from "./components/Body";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/ResultPage";

function App() {
  return (
    <div>
      <Head />

      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<MainContainer />} />
          <Route path="/watch" element={<WatchPage />} />
          <Route path="/results" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

/**
 * Head
 * Body
 * Sodibar
 *   MenuItems
 * MainContainer
 *    ButtonList
 *    VideoContainer
 *        VideoCard
 */
