import React, { useState } from 'react'
import List2 from './List2'
import { DragDropContext } from 'react-beautiful-dnd';

function Board() {

  return (
    <div className='flex flex-row h-screen bg-sky-700'>
      <DragDropContext 
      onDragEnd={()=>{}}>
        <List2 data={{name:"Doing", id:"doing"} } />
        <List2 data={{name:"Todo", id:"todo"} }/>
        {/* <List data={{name:"Completed", id:"completed"}}/> */}
      </DragDropContext>
    </div>
  )
}

export default Board
