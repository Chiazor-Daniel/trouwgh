import { FaCircle } from "react-icons/fa"
import { BiLayerPlus } from "react-icons/bi"
import { useTheme } from "../context/theme"
import { FaNewspaper } from "react-icons/fa"
import { RiEmojiStickerFill } from "react-icons/ri"
import { MdLocalMovies } from "react-icons/md"
import { motion } from "framer-motion"
export const Spaces = () => {
  let sty = "text-xl font-bold"
  const spaces = [
    {
      icon: <FaNewspaper className={sty} />,
      title: "News"
    },
    {
      icon: <RiEmojiStickerFill className={sty} />,
      title: "Memes"
    },
    {
      icon: <MdLocalMovies className={sty} />,
      title: "Entertainment"
    }
  ]
  const { theme } = useTheme()
  return (
    <div className={` hidden items-center py-8 cols-span-1 h-full md:flex flex-col ${theme == "dark" ? "text-gray-200" : "text-gray-500"}`}>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.2, opacity: 0.9 }}
        className="border px-4 py-2 rounded-lg shadow-md cursor-pointer transition-all duration-100"
      >
        <BiLayerPlus className="inline-flex text-lg" /> Create Space
      </motion.p>

      <ul className="grid gap-4 items-center text-center mt-6">
        {spaces.map((s, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            transition={{
              delay: idx === 0 ? 0.2 : idx === 1 ? 0.3 : idx === 2 ? 0.4 : 0,
              duration: 1,
              type: "spring",
              bounce: 0.4
            }}
            className={`px-4 py-2 rounded-xl transition-all duration-100 transform scale-50 hover:scale-100 ${theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-200"} flex gap-4 items-center cursor-pointer`}
          >
            <span className="relative">{s.icon}</span>
            <span className="font-normal text-md">{s.title}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
} 