import React, { useState, useEffect, useRef } from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { FaComment, FaShare } from "react-icons/fa";
import vid from "../../public/vid2.mp4";
import efx from "../../public/fx.gif"
import { useTheme } from "../context/theme";
import {FaPlay} from "react-icons/fa"
export const Posts = ({ ads, extra }) => {
  const Post = ({ name, content, imageUrl, vidUrl }) => {
    const [like, setLike] = useState(false);
    const { theme } = useTheme();
    const [effect, setEffect] = useState(false)
    const [comment, setComment] = useState(false)
    const [playing, setPlaying] = useState(false)
    const handleVideoClick = () => {
      setPlaying(!playing)
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    };

    function LikePost() {
      setLike(!like);
      if(!like){
        setEffect(true)
        setTimeout(()=>{setEffect(false)}, 1000)
      }
      
    }
    
    const videoRef = useRef();

    return (
      <div className={`${theme === "light" ? "bg-slate-100 shadow-lg text-gray 600" : "bg-slate-800 text-gray-200"} py-4 relative rounded-xl md:max-h-[500px]`}>
        <div className="flex items-center gap-2 px-4">
          <img src={imageUrl} className="w-8 h-8 rounded-full" alt="" />
          <div className="">
            <div className="flex gap-2">
              <p className="font-bold text-sm">{name}</p>
              <a className="text-sm text-blue-500 font-semibold cursor-pointer">
                Follow
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-sm text-gray-400">programming enthusiast -</p>
              <p className="text-xs text-gray-400 font-light">July 12</p>
            </div>
          </div>
        </div>
        {
          content && (
          <p className="px-4">
    {content.length > 200 ? (
      <>
        {content.slice(0, 200)}...
        <a href="#" className="text-blue-500">
          Read more
        </a>
      </>
    ) : (
      content
    )}
  </p>
          )
        }
        <div className="w-full h-[300px] py-2">
          {vidUrl ? (
            <div className="w-full h-full">
              <div className="relative h-full w-full">
                {
                  (!playing) && (
                    <FaPlay className="absolute text-gray-200 text-4xl  inset-0 m-auto" />
                  )
                }
                <video
                  ref={videoRef}
                  className="w-full max-h-[] h-full md:bg-slate-300"
                  onClick={handleVideoClick}
                >
                  <source src={vidUrl} type="video/mp4" />
                </video>
              </div>
            </div>
          ) : (
            <img src={imageUrl} className="object-cover    bg-slate-200 w-full h-full" alt="" />
          )}
        </div>
        <div className="flex">
          <button
            className="w-1/3 flex items-center justify-center"
            onClick={LikePost}
          >
            <div className="relative">
              <BsFillHandThumbsUpFill
                className={`${
                  like
                    ? "text-[#F875AA] scale-150 transition duration-100"
                    : "scale-100 transition duration-125 text-gray-500"
                } text-xl`}
              />
              {
                effect && (
                  <img src={efx} className="absolute -top-4 h-10 w-full"/>
                )
              }
            </div>
            <span className="inline-flex text-gray-400 px-2">2</span>
          </button>
          <button className="w-1/3 flex items-center justify-center" onClick={()=>setComment(!comment)}>
            <FaComment className="text-xl text-gray-500" />
            <span className="inline-flex text-gray-400 px-2">14</span>
          </button>
          <button className="w-1/3 flex items-center justify-center">
            <FaShare className="text-xl text-gray-500" />
            <span className="inline-flex text-gray-400 px-2">12</span>
          </button>
        </div>
        {
          comment && (
            <div className="w-full px-4 py-4 md:px-24 md:py-4 flex items-center justify-center">
              <input type="text" placeholder="Comment" className="py-3 focus:outline-none transition duration-200 bg-gray-200 focus:bg-gray text-gray-500 px-4 rounded-full w-full"/>
            </div>
          )
        }
      </div>
    );
  };
  const dummyComments = [
    { name: "Alice", comment: "Great post!" },
    { name: "Bob", comment: "I totally agree." },
    { name: "Charlie", comment: "Nice work!" },
    { name: "David", comment: "This is awesome." },
    { name: "Eve", comment: "Thanks for sharing." },
  ];
  
  const dummyData = [
    {
      name: "Von Deck",
      content:
        "Is it true that no programmers will be needed within 5 years due to AI? Is it true that no programmers will be needed within 5 years due to AI?",
      imageUrl:
        "https://images.pexels.com/photos/1133688/pexels-photo-1133688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Peter Rouge",
      content:
        "Is it true that no programmers will be needed within 5 years due to AI? Is it true that no programmers will be needed within 5 years due to AI?",
      imageUrl:
        "https://images.pexels.com/photos/3763879/pexels-photo-3763879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "John Doe",
      content: "What are the latest trends in web development?",
      imageUrl:
        "https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Alice Smith",
      content: "OOOh",
      vidUrl: vid,
      imageUrl:
        "https://images.pexels.com/photos/9818645/pexels-photo-9818645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Bob Johnson",
      content: "The importance of data science in modern businesses.",
      imageUrl:
        "https://images.pexels.com/photos/17116024/pexels-photo-17116024/free-photo-of-collection-of-vintage-pocket-watches.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
  ];

  const [posts, setPosts] = useState(dummyData);

  useEffect(() => {
    if (extra) {
      setPosts((prevPosts) => [extra,...prevPosts]);
    }
  }, [extra]);

  return (
    <div className="flex flex-col w-full gap-4 mt-3 md:pb-20 scroll-smooth">
      {posts.map((data, index) => (
        data.content && (
          <Post
            key={index}
            name={data.name}
            content={data.content}
            imageUrl={data.imageUrl}
            vidUrl={data.vidUrl}
          />
        )
      ))}
    </div>
  );
};
