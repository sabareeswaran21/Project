import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './components/createacc';
import Card from './components/card';
import Front from './components/frontpage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Front/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/personalinfo' element={<Card/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
