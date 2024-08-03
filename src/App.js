import "./App.css";
import FirstComponents from "./components/FirstComponents/FirstComponents";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostDetails from "./components/FirstComponents/PostDetails";
function App() {
  return (
    <div className="App">
      {
        <Router>
          <Routes  basename={process.env.PUBLIC_URL}>
            <Route path="/" element={<FirstComponents />} />
            <Route path="/post/:id" element={<PostDetails />} />
         
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
