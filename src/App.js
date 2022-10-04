import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Kieferorthopaedie from "./pages/Kieferorthopaedie";
import Preise from './pages/Preise';
import Revisionssicher from "./pages/Revisionssicher";
import Steuerkanzleien from "./pages/Steuerkanzleien";

function App() {
  return (
   <>
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/preise" element={<Preise/>} />
      <Route path="/steuerkanzleien" element={<Steuerkanzleien/>} />
      <Route path="/kieferorthopaedie" element={<Kieferorthopaedie/>} />
      <Route path="/revisionssicher" element={<Revisionssicher/>} />
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
