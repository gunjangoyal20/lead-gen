import './App.css';
import DemoPage from "./components/DemoPage/DemoPage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Restaurant from './components/Restaurant/Restaurant';
import NGO from './components/NgoPage/Ngo';
import FeedBack from "./components/FeedBack/FeedBack";
import ProductSell from "./components/ProductSell/ProductSell";
import Registration from './components/RegistrationForm/Registration';
import Chatbot from './components/Chatbot/Chatbot';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Registration />} />
          <Route path="/journeyBegins" exact element={<DemoPage />} />
          <Route path="/Restaurant" exact element={<Restaurant />} />
          <Route path="/ngo" exact element={<NGO />} />
          <Route path="/feedback" exact element={<FeedBack />} />
          <Route path="/productsell" exact element={<ProductSell />} />
          <Route path="/Chatbot" exact element={<Chatbot />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
