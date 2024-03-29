import React, { useRef } from 'react'
import Input from './Input'
import Model from './Model';

const Project = ({onAdd}) => {

  const model = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
      model.current.open();
      return;
    }
  
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }
  

  return (
    <>
    <Model ref={model} buttonCaption="Okay">
      <h2 className='text-xl font-bold text-stone-900 my-4'>Invalid Input</h2>
      <p className='text-stone-900 mb-4'>Oops..... looks like you forgot to enter a value.</p>
      <p className='text-stone-900 mb-4'>Please provide a valid input for every field.</p>
    </Model>
    <div className='w-[35rem] mt-16'>
      
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description"  textarea/>
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
      <menu className='flex items-center justify-center gap-4 my-4'>
        <li><button className='text-stone-00 hover:text-stone-950'>Cancel</button></li>
        <li><button className='px-6 py-2 rounded-md bg-stone-950 text-stone-50 hover:text-stone-50'
        onClick={handleSave}>Save</button></li>
      </menu>
    </div>
    </>
  )
}

export default Project
