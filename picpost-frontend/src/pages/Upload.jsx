import {useState} from 'react';
import toast from 'react-hot-toast';

const Upload = ({posts, setPosts}) => {
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('image', image);
        formData.append('caption', caption);
    
        try {
            const response = await fetch('http://localhost:4000/picpost/upload', {
                method: 'POST',
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
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
  )
}

export default Upload
