import { FaCircle } from "react-icons/fa"
import { BiLayerPlus } from "react-icons/bi"
import { useTheme } from "../context/theme"
import { BsArrowRight } from "react-icons/bs"
import { BsSendFill } from "react-icons/bs"
import { useState } from "react"
import { motion } from "framer-motion"
import  Chat  from "./chat"
import { useChat } from "../context/chatsContext"
export const Friends = () => {
  const friends = [
    {
      icon: "https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Ruby",
      online: true
    },
    {
      icon: "https://images.pexels.com/photos/6850602/pexels-photo-6850602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Trevor",
      online: true
    },
    {
      icon: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Klaus",
      online: true
    },
    {
      icon: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Anthony",
      online: false
    },

  ]
  const { theme } = useTheme()
  const [chat, setChat] = useState(false)
  const [userChat, setUserChat] = useState({})
  function closeChat() {
    setChat(!chat);
  }


  return (
    <div className="">
      <div className={`relative items-center py-8 cols-span-1 h-full hidden md:flex w-full flex-col ${theme == "dark" ? "text-gray-200" : "text-gray-500"}`}>
        <p className="rounded-lg cursor-pointer text-xl font-semibold text-[#F875AA] font-mono">
          Friends
        </p>
        <ul className="grid gap-2 w-full items-center text-center mt-6">
          {
            friends.map((s, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
              delay: idx === 0 ? 0.5 : idx === 1 ? 0.6 : idx === 2 ? 0.7 : idx === 3 ? 0.8 : 0,
                  
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.4
                }}
                onClick={() => {
                  setChat(!chat);
                  setUserChat({ user: s.title, online: s.online });
                }}
                className={`w-full py-2 px-2 rounded-xl transition-all duration-100 ${theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-200"} flex gap-4 items-center cursor-pointer`}
              >
                <span className="relative">
                  <FaCircle
                    className={`h-3 w-3 ${s.online ? "text-green-500" : "text-gray-400"} absolute bottom-1 -right-1 z-10`}
                  />
                  <img
                    className="w-9 h-9 rounded-full border-2 border-white brightness-75"
                    src={s.icon}
                    alt=""
                  />
                </span>
                <span className="font-normal text-md">
                  {s.title}
                  <span className="text-xs text-gray-300 block">
                    {s.online ? "Online" : "Offline"}
                  </span>
                </span>
              </motion.li>
            ))
          }

        </ul>
      </div>
      <Chat chat={chat} userChat={userChat} close={closeChat}/>
    </div>
  )
} 