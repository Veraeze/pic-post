import { useState } from 'react'


function App() {

  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handleSubmit = (e) => {
    e.handleSubmit();
    console.log({image, caption})
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-6'>
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4'>
        <h1 className='text-2xl font-bold mb-4 text-center'>📸 PicPost</h1>
        <input
        type='file' accept='image/*' onChange={(e) => setImage(e.target.files[0])} className='w-full border rounded px-3 py-2'
        required
        />
        
        <textarea
        placeholder='Write a caption...' value={caption} onChange={(e) => setCaption(e.target.value)} className='w-full border rounded px-3 py-2' rows='3'
        required
        ></textarea>

        <button type='submit' className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition">
          Upload
        </button>
      </form>
    </div>
  )
}

export default App
