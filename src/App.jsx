import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./home.jsx"
import Services from './services';

function App() {
  return (
     <Router basename='/growvy_react'>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
     </Routes>
      
    </Router>
  );
}
export default App;