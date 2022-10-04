import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Preise from './pages/Preise';
import Steuerkanzleien from "./pages/Steuerkanzleien";

function App() {
  return (
   <>
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/preise" element={<Preise/>} />
      <Route path="/steuerkanzleien" element={<Steuerkanzleien/>} />
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
