import { useEffect, useState } from 'react'
import PostFeed from './components/PostFeed';


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
            alert('upload successful!');
        } else{
            alert('upload failed!');
        }

    } catch (error) {
        console.error('upload error:', error);
        alert('upload error!');
    }
}

  return (
      <div className='min-h-screen bg-gray-100 p-6 flex flex-col items-center'>
        <form
          onSubmit={handleSubmit}
          className='bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4 mb-10'
        >
          <h1 className='text-2xl font-bold mb-4 text-center'>📸 PicPost</h1>
          <input
            type='file'
            accept='image/*'
            onChange={(e) => setImage(e.target.files[0])}
            className='w-full border rounded px-3 py-2'
            required
          />
          <textarea
            placeholder='Write a caption...'
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className='w-full border rounded px-3 py-2'
            rows='3'
            required
          ></textarea>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition'
          >
            Upload
          </button>
        </form>
        <PostFeed posts={posts} setPosts={setPosts}/>
      </div>
    );
};

export default App
