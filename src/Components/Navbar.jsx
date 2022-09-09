import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Avatar } from '@mui/material';

const Navbar = () => {
  return (
    <div className='flex justify-between sticky top-0 bg-white  w-[100%]'>
      <img className=" object-contain h-[100px] ml-20" 
      src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"  alt=""/>

      <div className=' flex flex-1 max-w-fit  items-center  p-[20px] h-[30px] m-auto  rounded-full boreder border-[#DDDDDD]  border-2 shadow-lg'>
        <input className=' border-none border-white w-64 outline-0' type="text" />
        <SearchIcon/>
      </div>
      <div className='flex items-center justify-between w-[20vw] mr-20'>
        <p className=' text-base font-bold'>Become a host</p>
        <LanguageIcon className=''/>
        <div className='flex items-center w-24 p-1 h-14  rounded-full boreder border-[#DDDDDD]  border-2 shadow-lg '>
        <MenuRoundedIcon className='m-1'/>
        <Avatar className='m-1'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
