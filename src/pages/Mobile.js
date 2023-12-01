import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getConatct } from "../redux/action";
import { Link } from "react-router-dom";
import axios from "axios";
const Mobile = () => {
  const data =useSelector((store)=>store.data);
  const dispatch =useDispatch()
  const [search,setSearch] =useState('')
  const[searchData,setSearchData] =useState([])


 useEffect(()=>{
  dispatch(getConatct())
 },[])
  
 const handleSearch = () => {
  if (search.trim() === '') {
    setSearchData([]); 
  }else{
    axios.get('http://localhost:8000/user/contacts/search', {
      params: {
        fName: search,
      },
    })
      .then(res => {
        setSearchData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  } 
 
};

const compareData = searchData.length > 0 ? searchData : data;

 
  return (
    <div>
      <div className="w-full md:w-9/12 lg:w-9/12 xl:w-9/12  flex flex-col md:flex-row justify-around border-1 border-white bg-cyan-500 shadow-lg shadow-cyan-500/50 relative px-2 md:px-10 py-3 m-auto rounded-sm">
    <input
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
     type="text"
    placeholder="Search"
    className="border-[1px] border-slate-500 w-full md:w-[380px] h-[40px] rounded-full px-6 md:px-14 mb-2 md:mb-0"
    />
     <CiSearch className="text-2xl md:text-4xl left-2   text-slate-600 absolute left-[550px] top-4" onClick={handleSearch} />
    <div>
    </div>
    </div>

    <div className="w-full md:w-9/12 lg:w-9/12 xl:w-9/12 flex flex-col md:flex-row justify-around bg-indigo-500 shadow-lg shadow-indigo-500/50 px-2 md:px-10 py-3 mt-1 m-auto rounded-sm">
     <p className="text-lg md:text-2xl font-bold text-slate-700 mb-2 md:mb-0 md:mr-4">
     My Profile
    </p>
    <IoIosArrowForward className="text-xl md:text-3xl pt-1 md:pt-2 " />
  </div>
      <div className="overflow-y-auto max-h-[300px]  max-w-[550px] bg-white border-[1px] border-x-slate-700 m-auto shadow-slate-800 mt-1">
       <p className="text-3xl px-20 mt-5 text-red-900 italic">My Favorites</p>
      {compareData?.map((ele,index) => (
       <div className="flex px-[100px] gap-[40px] py-2" key={ele.id}>
          {console.log(ele)}
      <div><img className="w-[70px] h-[70px] rounded-full" src="https://icon-library.com/images/icon-contact-us/icon-contact-us-22.jpg"alt="img" /></div>
     <div>
     <p className=" font-bold text-slate-600 italic">{ele.fName}{ele.lName}</p>
      <p className=" font-bold text-slate-600 italic">{ele.phone}</p>
     </div>
     <Link to= {`/mobile/${ele._id}`}>
      <HiDotsVertical className="text-2xl md:text-4xl text-slate-900 pt-2"  />
      </Link>
    </div>
     ))}
    </div>
    </div>
  );
};

export default Mobile;
