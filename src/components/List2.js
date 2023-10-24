import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card';

function List2({data}) {
  return (
    <div  className='flex flex-col bg-slate-300 h-max m-3 p-3 w-64 rounded-md'>
    {/* //   {(provided) => { */}
      
        {/* Heading */}
        <div className='flex flex-row left-0 mb-2'>
          <p className='text-md'>{data.name}</p>
        </div>


          {/* Add Cards */}
          <Card />

      {/* // } } */}

      
    </div >
  )
}

export default List2;