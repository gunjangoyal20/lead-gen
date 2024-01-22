import './App.css';
import DemoPage from "./components/DemoPage/DemoPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Restaurant from './components/Restaurant/Restaurant';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<DemoPage />} />
          <Route path="/Restaurant" exact element={<Restaurant />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
