import {FaSearch} from "react-icons/fa";
import {Link, Links} from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-2.5'>
         
         {/* VasanthEstate Button */}
         <Link to='/'>
         <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-gray-600'>Vasanth</span>
            <span className='text-gray-950'>Estate</span>
        </h1> 
         </Link>
         
            <form className='bg-slate-100 p-1 rounded-lg flex justify-between items-center'>
              <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
              <FaSearch className="text-slate-600"/>
            </form>
            <ul className="flex gap-4">
              <Link to= '/'>
              <li className="font-medium hidden sm:inline text-slate-700 hover:text-slate-900 hover:font-bold">
                Home</li>
              </Link>
              <Link to= '/about'>
              <li className="hidden sm:inline font-medium text-slate-700 hover:text-slate-900 hover:font-bold">
                About</li>
              </Link>
              <Link to= 'sign-in'>
              <li className="font-medium text-slate-700 hover:text-slate-900 hover:font-bold">
                Sign In</li>
              </Link>
            </ul>
      </div>
       
       
    </header>
  )
}
