import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Avatar } from '@mui/material';

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* left */}
    <div className='relative flex items-center h-10 cursor-pointer my-auto'>
      <img className=" object-contain object-left h-[100px]"
      layout="fill" 
      src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"  alt=""/>
      </div>

      {/* middle */}
      <div className=' flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input className=' flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start your Search' />
        <SearchIcon className="hidden md:inline-flex h-4  bg-red-400  text-white rounded-full p-1 cursor-pointer md:mx-2" />
      </div>

      {/* right */}
      <div className='flex items-center justify-end space-x-4 text-gray-500'>
        <p className=' hidden md:inline cursor-pointer'>Become a host</p>
        <LanguageIcon className='h-6 cursor-pointer'/>
        <div className='flex items-center space-x-2 border-2 p-2  rounded-full'>
        <MenuRoundedIcon className='h-6'/>
        <Avatar className='h-6'/>
        </div>
      </div>
    
    {/* <hr className='w-[100%] border-[#DDDDDD] shadow-md '/> */}
    </header>
  )
}

export default Navbar
