/** @format */

import { BrowserRouter, Routes, NavLink, Route } from "react-router-dom";
import { FilmsPage } from "./components/Pages";
import { HomePage } from "./components/Pages/HomePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className='header'>
        <NavLink to='/' activeClassName='active-link'>Home</NavLink>
        <NavLink to='/films' activeClassName='active-link'>Films</NavLink>
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/films' element={<FilmsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
