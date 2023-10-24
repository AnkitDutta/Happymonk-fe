import React from 'react';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

function Navbar() {
  return (
    <div className='flex h-11 items-center justify-center w-full bg-sky-900'>
        {/* left nav */}
        <div className='flex flex-row items-center text-white ml-3 w-1/2 '>
            <p className='font-semibold'>FE-ASSIGNMENT</p>
            <div className='flex flex-row items-center ml-3 mr-2 justify-center'>
                <button className=' hover:bg-slate-500 px-0.5 rounded-sm'>
                    <StarOutlineOutlinedIcon fontSize='small' className='mb-0.5'/>
                </button>
            </div>
            <div className='flex flex-row items-center text-xs justify-center h-6 rounded-sm mr-4 bg-slate-500'>
                <VisibilityOutlinedIcon fontSize='small' className='px-0.5 ml-1' />
                <p className='text-xs mr-1.5'>Workspace Visible</p>
            </div>
            <div className='flex flex-row items-center text-xs text-slate-800 h-6 rounded-sm justify-center bg-slate-300'>
                <EqualizerOutlinedIcon fontSize='small' className='px-0.5 ml-1'/>
                <p className='text-xs mr-1.5'>Board</p>
            </div>
                <ArrowDropDownOutlinedIcon className='bg-slate-500 rounded-sm ml-1'/>
        </div>

        {/* right nav */}
        <div className='flex flex-row items-center justify-end text-white mx-3 w-1/2'>
            <div className='flex flex-row items-center text-sm justify-center mx-4 h-6 rounded-sm bg-slate-500'>
                <RocketLaunchOutlinedIcon fontSize='small' className='pl-1 py-0.5'/>
                <p className='mx-1'>Power-Ups</p>
            </div>
            <div className='flex flex-row items-center text-sm justify-center h-6 mr-4 rounded-sm bg-slate-500'>
                <ElectricBoltOutlinedIcon fontSize='small' className='pl-1 py-0.5'/>
                <p className='mx-1'>Automation</p>
            </div>
            <div className='flex flex-row items-center text-sm justify-center h-6 mr-4 rounded-sm bg-slate-500'>
                <FilterListOutlinedIcon fontSize='small' className='pl-1 py-0.5'/>
                <p className='mx-1'>Filter</p>
            </div>
            <div className='flex h-6 w-6 rounded-full justify-center items-center mr-4 bg-slate-900 '>
                <p className='text-xs'>AE</p>
            </div>
            <div className='flex flex-row items-center text-sm text-slate-900 justify-center mr-1 h-6 rounded-sm bg-slate-300'>
                <PersonAddAltOutlinedIcon fontSize='small' className='pl-1 py-0.5' />
                <p className='mx-1'>Share</p>
            </div>
            <MoreVertOutlinedIcon fontSize='small' className='hover:bg-slate-500 rounded-sm' />
        </div>
    </div>
  )
}

export default Navbar

