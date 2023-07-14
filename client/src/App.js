// import './App.css';
// import Layout from './components/layout/layout.js'
//Routes as container
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import PageNotFound from './pages/pagenotfound';
import Contact from './pages/contact';
import Policy from './pages/Policy';
import About from './pages/about';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/private';
import ForgotPassword from './pages/Auth/forgotPassword';
import AdminRoute from './components/Routes/adminroute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';

function App() {
  return (
    <>
        <Routes>
       <Route path='/' element={<Homepage/>}/>
        <Route path="/dashboard" element={<PrivateRoute/>}>
            <Route path="user" element={<Dashboard/>}/>
            <Route path="user/orders" element={<Orders/>}/>
            <Route path="user/profile" element={<Profile/>}/>


        </Route>
        <Route path="/dashboard" element={<AdminRoute/>}>
            <Route path="admin" element={<AdminDashboard/>}/>
            <Route path="admin/create-category" element={<CreateCategory/>}/>
            <Route path="admin/create-product" element={<CreateProduct/>}/>
            <Route path="admin/users" element={<Users/>}/>



        </Route>
       
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/policy' element={<Policy/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/forgot-password' element={<ForgotPassword/>}/>
       <Route path='*' element={<PageNotFound/>}/>
      </Routes>


  </>
  );
}

export default App;
