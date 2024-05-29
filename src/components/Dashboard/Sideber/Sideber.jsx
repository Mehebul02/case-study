import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { BsFillHouseAddFill,} from 'react-icons/bs'
import {  } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'
import { MdHomeWork } from 'react-icons/md'
// import useRole from '../../../hooks/useRole'
import MenuItem from './menu/MenuItem'
import { IoCreateOutline } from 'react-icons/io5'
import logo from '../../../assets/images/logo (2).png'
import { PiStudentFill } from 'react-icons/pi'
import { FaBook } from 'react-icons/fa'
const Sidebar = () => {
  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false)
// const [role]=useRole()
// console.log(role);
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <img 
                // className='hidden md:block'
                src={logo}
                alt='logo'
                width='100'
                height='100'
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full  hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-[#7495] mx-auto'>
              <Link to='/'>
                <img  className='w-full'
                  // className='hidden md:block'
                  src={logo}
                  alt='logo'
                  width='100'
                  height='100'
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* user */}
              <MenuItem label='Student Home' address='studentHome' icon={PiStudentFill}/>
            
              {/*   My Submitted */}
              <MenuItem label='My Submitted' address='my-submit' icon={FaBook}/>
            
              {/* createAssignments */}
              <MenuItem label='Create Assignments' address='createAssignments' icon={IoCreateOutline}/>
            
            
              
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to='/dashboard/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
              }`
            }
          >
            <FcSettings className='w-5 h-5' />

            <span className='mx-4 font-medium'>Profile</span>
          </NavLink>
          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar