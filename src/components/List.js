import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';

function List({data}) {
  return (
    <div className='flex flex-col bg-slate-300 h-max m-3 p-3 w-64 rounded-md'>
      <Droppable droppableId={data.id}>
        {
          (provided) => {
            <div 
              className='parent-div' 
              ref={provided.innerRef} 
              {...provided.droppableProps}
            >
                {/* Heading */}
                <div className='flex flex-row left-0 mb-2'>
                  <p className='text-md'>{data.name}</p>
                </div>

                {/* Add Cards */}
                <Card />
          </div>
        }}
        
      </Droppable>
    </div>
  )
}

export default List;