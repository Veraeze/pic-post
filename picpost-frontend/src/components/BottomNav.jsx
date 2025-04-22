import { Link } from "react-router-dom";
import { FaHome, FaPlus, FaUser } from "react-icons/fa";
const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around items-center py-3 border-t z-50">        {/*  Link to home page */}
        <Link to='/' className="text-pink-700 hover:text-pink-800 text-xl">
        <FaHome/>
        </Link>
        {/*  link to upload page */}
        <Link to='/upload' className="text-pink-700 hover:text-pink-800 text-2xl">
        <FaPlus/>
        </Link>
        {/*  link to personal profile */}
        <Link to='/profile' className="text-pink-700 hover:text-pink-800 text-xl">
        <FaUser/>
        </Link>
    </nav>
  )
}

export default BottomNav
