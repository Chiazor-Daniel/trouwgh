import {AiFillHome} from "react-icons/ai"
import {AiFillFire} from "react-icons/ai"
import {BsFillPersonLinesFill} from "react-icons/bs"
import {BiLayerPlus, BiSolidSun} from "react-icons/bi"
import {RiSpaceShipFill} from "react-icons/ri"
import {BsFillBellFill} from "react-icons/bs"
import {FaGlobe} from "react-icons/fa"
import {BsFillMoonStarsFill} from "react-icons/bs"
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from "../context/theme"
import { useState } from "react"
import { motion } from "framer-motion"
function Nav() {
    let style = "text-gray-500 hover:text-[#F875AA] cursor-pointer"
  const icons = [
    {
      icon: <AiFillHome  className={style}/>,
      title: "Home"
    },
    {
      icon: <BiLayerPlus className={style}/>, 
      title: "Spaces"
    },
    {
      icon: <BsFillPersonLinesFill className={style}/>,
      title: "Friends"
    },
   
    {
      icon: <BsFillBellFill className={style}/>,
      title: "Notification"
    },
  ]
  const {theme, toggleTheme} = useTheme();

  return (
   <div className='md:relative fixed w-full z-20 bg-white px-2 py-1 shadow-md flex items-center justify-around glass border-none'>
    <motion.div initial={{x:-400}} animate={{x:0}} transition={{duration: 1.5, type: "spring", bounce:0.4 }}>
      <h2 className="text-3xl font-mono font-bold text-[#F875AA]">trough</h2>
    </motion.div>
    <ul className="flex gap-2 md:gap-6">
      {
        icons.map((c, idx) => (
          <motion.div
            key={idx}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
            transition={{
              delay: idx === 0 ? 0.5 : idx === 1 ? 0.6 : idx === 2 ? 0.7 : idx === 3 ? 0.8 : 0,
              duration: 1,
              type: "spring",
              bounce: 0.4
            }}
          >
            <Tooltip title={c.title}>
              <li className={`text-2xl p-2`} key={idx}>
                {c.icon}
              </li>
            </Tooltip>
          </motion.div>
        ))
        
      }
    </ul>
    <input type="text" placeholder="search" className="hidden md:flex   bg-transparent border my-1 border-gray-300 px-4 py-1 rounded-full focus:outline-none w-[300px]"/>
    <div className="flex items-center gap-4">
            {/* <FaGlobe className={`${style} text-2xl`}/> */}
            <img src="https://images.pexels.com/photos/1133688/pexels-photo-1133688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-8 h-8 rounded-full" alt="" />
            {
              theme == "light" ? (
            <BsFillMoonStarsFill className={`${theme=="light"? "text-gray-500": "text-gray-200"} text-2xl cursor-pointer`} onClick={toggleTheme}/>
              ):(
                <BiSolidSun className={`${theme=="light"? "text-gray-500": "text-gray-200"} text-2xl cursor-pointer transition-all duration-200`} onClick={toggleTheme}/>
              )
            }
        </div>
   </div>
  )
}

export default Nav
