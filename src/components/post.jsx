import React, { useEffect, useState } from 'react';
import { usePost } from '../context/post-context';
import { useTheme } from '../context/theme';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { MdAddReaction, MdPermMedia } from 'react-icons/md';
import { BiSolidBookOpen } from 'react-icons/bi';

import { BsFillPenFill } from 'react-icons/bs';

export const Post = ({onDataFromChild}) => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [media, setMedia] = useState(null);
  let pic;

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // Clear the input fields when the modal is closed
    setContent('');
    setMedia(null);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleMediaChange = (e) => {
    const file = e.target.files[0]
    if(file){
      setMedia(e.target.files[0])};
  };

  const handlePostSubmit = async () => {
    const newPost = {
      name: 'Von Deck',
      content,
      imageUrl: media ? URL.createObjectURL(media) : null,
    };
      onDataFromChild(newPost);
      
  
    handleClose();
  };
  
  return (
    <div className={`w-full rounded-xl px-3 pt-4 mt-1 ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'} shadow-xl top`}>
      <div className="flex gap-2 items-center">
        <img
          src="https://images.pexels.com/photos/1133688/pexels-photo-1133688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="w-8 h-8 rounded-full"
          alt=""
        />
        <input
          className={`w-full px-6 py-2 ${
            theme === 'light'
              ? 'text-gray-600 bg-slate-200 border'
              : 'text-gray-200 bg-slate-800 border-none'
          } border-gray-300 rounded-full transition-all duration-200 focus:bg-transparent focus:outline-none`}
          placeholder="What do you want to ask or share ?"
          onClick={handleOpen}
        />
      </div>
      <div className="w-full flex p-2 gap-3">
        <button
        onClick={()=>setOpen(true)}
          className={`w-1/2 p-2 rounded-full ${
            theme === 'light'
              ? 'hover:bg-slate-200 text-gray-500'
              : 'hover:bg-slate-700 text-gray-200'
          } transition-all duration-100 flex items-center justify-center gap-2`}
        >
          <BsFillPenFill className="" />
          <span>Post</span>
        </button>
        <button
          className={`w-1/2 p-2 rounded-full ${
            theme === 'light'
              ? 'hover:bg-slate-200 text-gray-500'
              : 'hover:bg-slate-700 text-gray-200'
          } transition-all duration-100 flex items-center justify-center gap-2`}
        >
          <MdAddReaction className="" />
          <span>React</span>
        </button>
       
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            className={`md:w-3/6 ${
              theme === 'light' ? 'bg-slate-200' : 'bg-slate-900'
            } m-auto absolute inset-0 h-3/5 rounded-xl p-4 flex flex-col gap-2 items-center`}
          >
            <textarea
              rows="4"
              className={`resize border w-full px-6 py-2 border-gray-300 rounded-xl transition-all duration-200 ${
                theme === 'light'
                  ? 'text-slate-500 bg-slate-200'
                  : 'text-slate-200 bg-slate-900'
              } focus:bg-transparent focus:outline-none`}
              placeholder="What do you want to ask or share ?"
              value={content}
              onChange={handleContentChange}
            ></textarea>
            <div className="cursor-pointer relative w-full h-1/2 flex flex-col gap-4 text-gray-400 items-center bg-gray-400 rounded-xl">
              <label>
              
                    <input
                      type="file"
                      accept="image/*, video/*"
                      className='w-full h-full absolute opacity-0 inset-0 cursor-pointer'
                      onChange={handleMediaChange}
                    />
            
                    <img src={media && URL.createObjectURL(media)} alt="meida" className='w-full object-contain h-full inset-0 absolute z-50'/>
                
                <button className="w-full   cursor-pointer rounded py-2 h-full">
                  <MdPermMedia className='m-auto text-8xl text-gray-200'/>
                </button>
              </label>
            </div>
            <button
              onClick={handlePostSubmit}
              className="m-auto bg-[#F875AA] py-3 rounded-full text-white w-1/2"
            >
              Post
            </button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
