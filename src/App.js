import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Impressum from "./pages/Impressum";
import Kieferorthopaedie from "./pages/Kieferorthopaedie";
import PageNotFound from "./pages/PageNotFound";
import Preise from './pages/Preise';
import Revisionssicher from "./pages/Revisionssicher";
import Steuerkanzleien from "./pages/Steuerkanzleien";
import Termin from "./pages/Termin";

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
      <Route path="/termin" element={<Termin/>} />
      <Route path="/impressum" element={<Impressum/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
