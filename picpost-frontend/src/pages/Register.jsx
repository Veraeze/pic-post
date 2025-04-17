import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {

  const [formData, setFormData] = useState({name: '', email: '', password: ''});
  const navigate = useNavigate();

  //handling input changes
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:4000/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || 'registration failed');
        return;
      }

      toast.success('registration successful');
      navigate('/login');
    } catch (error) {
      console.error(error);
      toast.error('something went wrong')
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-4'>
      <form onSubmit={handleSubmit} className='bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4'>
        <h2 className='text-2xl font-bold text-center text-pink-500'>Register</h2>
        <input 
        name='name' value={formData.name} onChange={handleChange} placeholder='full name' 
        className='w-full border border-pink-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500'
        required
        />
        <input 
        name='email' type='email' value={formData.email} onChange={handleChange} placeholder='email'
        className='w-full border border-pink-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500'
        required
        />
        <input
        name='password' type='password' value={formData.password} onChange={handleChange} placeholder='password'
        className='w-full border border-pink-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500'
        required
        />
        <button type='submit' className='w-full bg-pink-500 text-white font-semibold py-2 rounded hover:bg-pink-600 transition'>
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Register
