import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Preise from './pages/Preise';

function App() {
  return (
   <>
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/preise" element={<Preise/>} />
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
