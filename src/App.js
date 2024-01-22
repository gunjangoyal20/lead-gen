import './App.css';
import DemoPage from "./components/DemoPage/DemoPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Restaurant from './components/Restaurant/Restaurant';
import NGO from './components/NgoPage/Ngo';
import FeedBack from "./components/FeedBack/FeedBack";
import ProductSell from "./components/ProductSell/ProductSell";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<DemoPage />} />
          <Route path="/Restaurant" exact element={<Restaurant />} />
          <Route path="/ngo" element={<NGO />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/productsell" element={<ProductSell />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
