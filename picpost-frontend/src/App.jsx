import { useEffect, useState } from 'react';
import PostFeed from './components/PostFeed';
import {Toaster} from 'react-hot-toast';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Upload from './pages/Upload';
import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom';
import BottomNav from './components/BottomNav';

const PrivateRoute = ({children}) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to='/login'/>;
};


function App() {

  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //   try {
  //     const res = await fetch('http://localhost:4000/picpost/posts');
  //     const data = await res.json();
  //     setPosts(data.data);
  //   } catch (error) {
  //     console.error('error fetching posts:', error);
  //   }
  // };
  // fetchPosts();
  // }, []);
  
  return (
    <div className="text-4xl text-pink-700 font-bold bg-black p-10">
      If this is pink with black bg → Tailwind is working 🎉
    </div>
    // <BrowserRouter>
    //   <div className='min-h-screen bg-gray-100 p-6 flex flex-col items-center'>
    //     <Navbar/>
    //     <Routes>
    //       {/* home feed */}
    //       <Route
    //       path='/' element={
    //         <PrivateRoute>
    //           <PostFeed posts={posts} setPosts={setPosts}/>
    //         </PrivateRoute>
    //       }
    //       />
    //       {/* upload form */}
    //       <Route
    //       path='/upload' element={
    //         <PrivateRoute>
    //           <Upload posts={posts} setPosts={setPosts}/>
    //         </PrivateRoute>
    //       }
    //       />
    //       {/* profile */}
    //       <Route
    //       path='/profile'
    //       element={
    //         <PrivateRoute>
    //         <Profile/>
    //         </PrivateRoute>
    //       }
    //     />
    //     {/* auth routes */}
    //     <Route path='/login' element={<Login/>}/>
    //     <Route path='/register' element={<Register/>}/>
    //     </Routes>
    //     <Toaster position='top-right'/>
    //     <BottomNav/>
    //   </div>
    //   </BrowserRouter>
    );
};

export default App
