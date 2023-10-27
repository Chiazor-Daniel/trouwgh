import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { BsSendFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import socketIO from "socket.io-client"

const Chat = ({ chat, userChat, close }) => {
  const [typn, setTypn] = useState("");
  const [chats, setChats] = useState([]);
  const socket = socketIO.connect("http://localhost:9000")

  useEffect(() => {
    // Listen for incoming chat messages from the server
    socket.on("message", (data) => {
      setChats([...chats, data]);
    });
    
    // Listen for typing status updates
    socket.on("typingResponse", (data) => {
      setTypn(data);
    });
  }, [socket]);

  const handleSendMessage = () => {
  if (typn.trim() !== "") {
  
    socket.emit("message", { text: typn }); 

    // Add the outgoing message to the chat log
    setChats((prevChats) => [
      ...prevChats,
      { id: socket.id, text: typn },
    ]);

    // Clear the input field
    setTypn("");
  }
};

  return (
    <motion.div
      key={chat}
      initial={chat ? { x: 500 } : { x: 0, opacity: 1 }}
      animate={chat ? { x: 0, opacity: 1 } : { x: 500 }}
      transition={{ duration: 1, type: "spring", bounce: 0.4 }}
      className="bg-slate-200 glass rounded-xl right-1 top-2 py-4 px-2 w-[300px] absolute h-[90%] z-20 flex flex-col gap-4"
    >
      <div className="flex gap-2 justify-around items-center text-gray-500 h-[5%]">
        <div className="relative">
          <FaCircle
            className={`h-3 w-3 ${
              userChat.online ? "text-green-500" : "text-gray-400"
            } absolute bottom-1 -right-1 z-10`}
          />
          <img
            className="w-9 h-9 rounded-full border-2 border-white brightness-75"
            src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <span>{userChat.user}</span>
        <div
          onClick={() => close()}
          className="hover:bg-slate-400 rounded-full hover:text-gray-100 p-2 cursor-pointer"
        >
          <BsArrowRight />
        </div>
      </div>
      <div className="z-10 h-[440px] rounded-xl overflow-auto no-scrollbar">
        <ul className="flex flex-col gap-4 overflow-auto no-scrollbar w-full">
          {chats.map((ch, index) => (
            <>
            <motion.li initial={{y:50}} animate={{y:0}} transition={{duration:1, type:"spring", bounce:0.4}} key={index} className="bg-slate-300 text-gray-800 w-fit text-xl rounded-full px-3 py-1">
              {ch.text}
            </motion.li>
           {
            ch.text && (
              <div className="w-full flex justify-end">
           <motion.li initial={{y:50}} animate={{y:0}} transition={{delay:0.5, duration:1, type:"spring", bounce:0.4}} className= " float-right bg-slate-300 text-gray-800 w-fit text-xl rounded-full px-3 py-1">
              Hey
            </motion.li>

              </div>
            )
           }
            </>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2 h-[10%] relative">
        <input
          type="text"
          value={typn}
          onChange={(e) => setTypn(e.target.value)}
          placeholder="Type message"
          className="w-full py-2 rounded-xl px-4 focus:outline-none text-gray-600"
        />
        <div
          onClick={handleSendMessage}
          className="bg-pink-500 text-gray-100 absolute -right-1 top-0 rounded-full p-2 grid justify-center items-center w-10 h-10"
        >
          <BsSendFill />
        </div>
      </div>
    </motion.div>
  );
};

export default Chat;
