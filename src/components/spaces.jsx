import {FaCircle} from "react-icons/fa"
import {BiLayerPlus} from "react-icons/bi"
import { useTheme } from "../context/theme"
export const Spaces = () =>{
    const spaces = [
        {
          icon: "https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Fashion"
        },
        {
          icon: "https://images.pexels.com/photos/6850602/pexels-photo-6850602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          title: "Design"
        },
        {
          icon: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Science"
        },
        {
          icon: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Economics"
        },
        {
          icon: "https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Music"
        },
        {
            icon: "https://images.pexels.com/photos/1837687/pexels-photo-1837687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Sports"
          },
          {
            icon: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Technology"
          }
      ]
      const {theme} = useTheme()
    return(
        <div className={`hidden items-center py-8 cols-span-1 h-full md:flex flex-col ${theme =="dark" ? "text-gray-200": "text-gray-500"}`}>
          <p className="border px-4 py-2 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-all duration-100"><BiLayerPlus className="inline-flex text-lg"/> Create Spaces</p>
          <ul className="grid gap-4 items-center text-center mt-6">
            {
                spaces.map((s)=><li className={`px-4 py-2 rounded-xl transition-all duration-100 ${theme=="dark"?"hover:bg-slate-700":"hover:bg-slate-200"} flex gap-4 items-center cursor-pointer`}><span className="relative"><FaCircle className="h-2 w-2 text-red-500 absolute -top-1 -right-1 z-10"/><img className="w-5 h-5 rounded brightness-75" src={s.icon} alt=""/></span><span className="font-normal text-md">{s.title}</span></li>)
            }
          </ul>
        </div>
    )
} 