import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Home from "./pages/Home";

function App(index) {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<Posts />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
