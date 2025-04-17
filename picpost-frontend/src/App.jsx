import { useEffect, useState } from 'react';
import PostFeed from './components/PostFeed';
import toast, {Toaster} from 'react-hot-toast';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import { Navigate, Route, Router, Routes } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to='/login'/>;
};

function App() {

  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
    try {
      const res = await fetch('http://localhost:4000/picpost/posts');
      const data = await res.json();
      setPosts(data.data);
    } catch (error) {
      console.error('error fetching posts:', error);
    }
  };
  fetchPosts();
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('caption', caption);

    try {
        const response = await fetch('http://localhost:4000/picpost/upload', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        console.log('upload response:', result);

        if (result.success) {
            setImage(null);
            setCaption('');
            const res = await fetch('http://localhost:4000/picpost/posts');
            const data = await res.json();
            setPosts(data.data);
            toast.success('upload successful!');
        } else{
            toast.error('upload failed!');
        }

    } catch (error) {
        console.error('upload error:', error);
        alert('upload error!');
    }
}

  return (
    <Router>
      <div className='min-h-screen bg-gray-100 p-6 flex flex-col items-center'>
        <Navbar/>
        <Routes>
          <Route
          path='/'
          element={
            <PrivateRoute>
            <>
              <form
                onSubmit={handleSubmit}
                className='bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4 mb-10'
              >   
                <input
                  type='file'
                  accept='image/*'
                  onChange={(e) => setImage(e.target.files[0])}
                  className="w-full border border-pink-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"            required
                />
                <textarea
                  placeholder='Write a caption...'
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className='w-full border rounded px-3 py-2'
                  rows='3'
                  required>
                </textarea>
                <button
                  type='submit'
                  className="w-full bg-pink-500 text-white font-semibold py-2 rounded hover:bg-pink-600 transition"          >
                  Upload
                </button>
              </form>
              <PostFeed posts={posts} setPosts={setPosts}/>
            </>
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        </Routes>
        <Toaster position='top-right'/>
      </div>
      </Router>
    );
};

export default App
