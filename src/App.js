import logo from './logo.svg';
import './App.css';
import Navbar from './component/Home/Navbar';
import { Route, Routes } from 'react-router-dom';
import AddTask from './component/Home/AddTask';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import RequireAuth from './component/Login/RequireAuth';
import Register from './component/Login/Register';


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='add' element={<RequireAuth>
        <AddTask></AddTask>
       </RequireAuth>}></Route>
       <Route path='/login' element={ <Login></Login>}></Route>
       <Route path='/register' element={ <Register></Register>}></Route>
      
     </Routes>
    </div>
  );
}

export default App;
