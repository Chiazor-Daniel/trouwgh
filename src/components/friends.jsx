import {FaCircle} from "react-icons/fa"
import {BiLayerPlus} from "react-icons/bi"
import { useTheme } from "../context/theme"
export const Friends = () =>{
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
      const {theme} = useTheme()
    return(
        <div className={`items-center py-8 cols-span-1 h-full hidden md:flex w-full flex-col ${theme =="dark" ? "text-gray-200": "text-gray-500"}`}>
          <p className="rounded-lg cursor-pointer text-xl font-semibold text-[#F875AA] font-mono">
            Friends
            </p>
          <ul className="grid gap-2 w-full items-center text-center mt-6">
            {
                friends.map((s)=>
                <li className={`w-full py-2 px-2 rounded-xl transition-all duration-100 ${theme=="dark"?"hover:bg-slate-700":"hover:bg-slate-200"} flex gap-4 items-center cursor-pointer`}>
                    <span className="relative">
                        <FaCircle className={`h-3 w-3 ${s.online ? "text-green-500" :"text-gray-400"} absolute bottom-1 -right-1 z-10`}/>
                        <img className="w-9 h-9 rounded-full border-2 border-white brightness-75" src={s.icon} alt=""/></span>
                        <span className="font-normal text-md">{s.title}</span>
                </li>)
            }
          </ul>
        </div>
    )
} 