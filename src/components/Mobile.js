import React from "react";
import { AiOutlineAudio } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
const Mobile = () => {
  const data = [
    {
      text: "Rahul",
      images: "https://images.alphacoders.com/440/440562.jpg",
    },
    {
      text: "Rahul",
      images: "https://images.alphacoders.com/440/440562.jpg",
    },
    {
      text: "Rahul",
      images: "https://images.alphacoders.com/440/440562.jpg",
    },
    {
      text: "Rahul",
      images: "https://images.alphacoders.com/440/440562.jpg",
    },
    {
      text: "Rahul",
      images: "https://images.alphacoders.com/440/440562.jpg",
    },
    {
      text: "Rahul",
      images: "https://images.alphacoders.com/440/440562.jpg",
    },
  ];

  return (
    <div>
      <div className="w-full md:w-9/12 lg:w-9/12 xl:w-9/12  flex flex-col md:flex-row justify-around border-1 border-white bg-cyan-500 shadow-lg shadow-cyan-500/50 relative px-2 md:px-10 py-3 m-auto rounded-sm">
    <input
     type="text"
    placeholder="Search"
    className="border-[1px] border-slate-500 w-full md:w-[380px] h-[40px] rounded-full px-6 md:px-14 mb-2 md:mb-0"
    />
     <CiSearch className="absolute top-4 text-2xl md:text-4xl left-2 md:left-[168px] text-slate-600" />
    <AiOutlineAudio className="absolute top-4 text-2xl md:text-3xl right-2 md:right-[430px] text-slate-500" />
    <div>
    <HiDotsVertical className="text-2xl md:text-4xl text-slate-900 pt-2" />
    </div>
    </div>

    <div className="w-full md:w-9/12 lg:w-9/12 xl:w-9/12 flex flex-col md:flex-row justify-around bg-indigo-500 shadow-lg shadow-indigo-500/50 px-2 md:px-10 py-3 mt-1 m-auto rounded-sm">
     <p className="text-lg md:text-2xl font-bold text-slate-700 mb-2 md:mb-0 md:mr-4">
     My Profile
    </p>
    <IoIosArrowForward className="text-xl md:text-3xl pt-1 md:pt-2 " />
  </div>
      <div className="overflow-y-auto max-h-[300px] max-w-[500px] bg-white border-[1px] border-x-slate-700 m-auto shadow-slate-800 mt-1">
       <p className="text-3xl px-20 mt-5 text-red-900 italic">My Favorites</p>
      {data?.map((ele) => (
       <div className="flex px-[100px] gap-[40px] py-2" key={ele.id}>
      <div><img className="w-[70px] h-[70px] rounded-full" src={ele.images} alt="img" /></div>
      <div className=" font-bold text-slate-600 italic">{ele.text}</div>
    </div>
     ))}
    </div>
    </div>
  );
};

export default Mobile;
