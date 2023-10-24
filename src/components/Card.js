import React, { useRef, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


function Card() {
    const [inputFields,setInputFields] = useState([]);

  const handleAddFields = () => {
    setInputFields([...inputFields, {value: "", editable: true }]);
  }

  const handleInputChange = (index, e) => {
    const values = [...inputFields];
    values[index].value = e.target.value;
    setInputFields(values);
  }

  const handleEditFields = (index) => {
    const values = [...inputFields];
    values[index].editable = true;
    setInputFields(values);
    textAreaRefs[index].current.select();
  }

  const handleKeyPress = (index, e) => {
    if(e.key == 'Enter'){
        e.preventDefault();
        const values = [...inputFields];
        values[index].editable = false;
        setInputFields(values);
    }
  }

  const textAreaRef = useRef(null);
  const textAreaRefs = inputFields.map(()=> textAreaRef);

  const handleTextAreaChange = (index) => {
    textAreaRefs[index].current.style.height = "auto";
    textAreaRefs[index].current.style.height =
     `${textAreaRefs[index].current.scrollHeight}px`;
  };

  return (
    <div className='flex flex-col w-full'>
        {inputFields.map((inputField, index) => (

          //Individual Card Text area
          <div className='flex mb-3' key={index}>
              <textarea
                  ref={textAreaRefs[index]}
                  className="rounded-s-md scrollbar-hide resize-none w-full p-2 border-none outline-none"  
                  placeholder='Enter a title for this card' 
                  value={inputField.value}
                  onChange={(e) => {handleInputChange(index, e); handleTextAreaChange(index)}}
                  onKeyDown={(e) => handleKeyPress(index,e)}
                  readOnly={!inputField.editable}
              />
              <button 
                className="bg-white rounded-e-md p-1 hover:text-red-500" 
                onClick={() => handleEditFields(index)}
              >
                <EditOutlinedIcon fontSize='small' className='mr-1' />
              </button>
          </div>
        ))}

        {/* Add New Card Button */}
        <button
          onClick={handleAddFields} 
          className='h-10 mx-auto w-full rounded-md p-2 flex justify-start items-center bg-white'
        >
            <AddIcon fontSize='small' />
            <p className='text-md ml-1'>Add a card</p>
        </button>
    </div>
  )
}

export default Card