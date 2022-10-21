import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<h1>Product Listing componet</h1>} />
        <Route path='/add' element={<h1>Add Product Listing componet</h1>} />
        <Route path='/update' element={<h1>Update Product Listing componet</h1>} />
        <Route path='/logout' element={<h1>logout User</h1>} />
        <Route path='/profile' element={<h1>User Details</h1>} />
        </Route>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
