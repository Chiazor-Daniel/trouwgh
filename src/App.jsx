import { Ads } from "./components/Ads";
import Nav from "./components/nav";
import { Post } from "./components/post";
import { Posts } from "./components/posts";
import { Spaces } from "./components/spaces";
import { useTheme } from "./context/theme";
import { usePost } from "./context/post-context";
import { PostProvider } from "./context/post-context";
import { useState, useEffect } from "react";
import { Friends } from "./components/friends";

function App() {
  let ads = false;
  const { theme, setTheme } = useTheme();
  const [lat, setLat] = useState({}); // Use useState to initialize state

  const handleDataFromChild = (data) => {
    setLat(data);
    console.log(lat);
  };

  return (
    <div className={`md:h-screen flex flex-col ${theme === "dark" ? "bg-[#19202d]" : "bg-slate-100"} overflow-hidden`}>
      <Nav />
      <div className="grid md:grid-cols-7 h-full px-2 md:px-4 lg:px-12">
        <Spaces />
        <div
          className={` ${
            "md:px-8 lg:px-20 col-span-5"
          } relative flex flex-col gap-2 overflow-auto no-scrollbar scroll-smooth py-12 md:py-8`}
        >
          <PostProvider>
            <Post onDataFromChild={handleDataFromChild} />
            <Posts ads={ads} extra={lat}/>
          </PostProvider>
        </div>
        {ads ? <Ads /> : <Friends />}
      </div>
    </div>
  );
}

export default App;
