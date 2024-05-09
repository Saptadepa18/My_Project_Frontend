import React from 'react';
import {  BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import { User } from './components/User';
import {  QueryClientProvider,useQueryClient,useQuery,QueryClient } from 'react-query';
import { UserDetails } from './components/UserDetails';
import MenuExampleInvertedSecondary from './components/Headers';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import SignUp from './components/SignUp';
import { LogIn } from './components/LogIn';


const queryClient=new QueryClient();
function App() {
  return (
    <>
   {/* <MenuExampleInvertedSecondary/> */}
    <QueryClientProvider client={queryClient}>
    {/* <ToastContainer/> */}
    <Router>
    {/* <MenuExampleInvertedSecondary/> */}
    <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/login' element={<LogIn/>}></Route>
      {/* <Route path='/user/'></Route> */}
      <Route path='/user/:userId' element={<UserDetails/>}></Route>
      <Route path='/home' element={<User/>}></Route>
      <Route path='/ContactUs' element={<ContactUs/>}></Route>
      <Route path='/AboutUs' element={<AboutUs/>}></Route>
    </Routes>
    </Router>
    </QueryClientProvider>
    </> 
  );
}

export default App;
