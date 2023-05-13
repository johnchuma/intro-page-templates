import logo from './logo.svg';
import './App.css';
import './apercu.css'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home_page';
import 'bootstrap/dist/css/bootstrap.min.css'
import LayoutPage from './pages/layout_page';


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPage/>}>
        <Route path='/' index element={<HomePage/>}/>
      
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
