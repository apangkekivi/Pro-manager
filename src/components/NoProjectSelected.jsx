// NoProjectSelected.jsx
import React from 'react';
import noProjectImg from '../assets/no-projects.png';
import Button from './Button';

const NoProjectSelected = ({onStartAddProject}) => {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img src={noProjectImg} alt="an empty task list" className='w-16 h-16 object-contain mx-auto' />
      <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
      <p className='text-stone-400 mb-4'>Select a project or get started a new one</p>
      <Button onClick={onStartAddProject}>Create new project</Button>
    </div>
  );
};

export default NoProjectSelected;
