/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import { usePostsContext } from "../context/PostsProvider"
type NavProps = {
    search:string 
    setSearch:React.Dispatch<string>
}


const Nav =() => {
    const [search,setSearch]=useState<string>('')
    const {posts,getSearchResult}=usePostsContext()
    useEffect(()=> {
       
        getSearchResult(search)

    },[search,posts])
   
    return <nav className="bg-nav-color text-white w-full flex  sm:flex-row flex-col lg:justify-between">
        <form className="  w-[100%] sm:w-[80%] sm:pt-4 sm:pl-3 sm:pr-0 sm:pb-3  p-3 text-black" onSubmit={e => e.preventDefault()}>
            <label className="absolute left-[-999999px]" htmlFor="search">Search Posts</label>
            <input className=" w-[100%] lg:w-full p-1 text-lg rounded-sm pl-3 active:border-primary border-2 focus:border-primary  border-gray-300 outline-none"type="text" name='search' id='search' placeholder="Search Posts" value={search} onChange={e => setSearch(e.target.value)}
            
             />
        </form>
        <ul className="flex  w-full sm:w-[80%]   gap-5 sm:justify-center  sm:items-center pl-3 pt-0 mt-0 ">
            <li className=" hover:bg-sky-300 w-20  h-10 flex items-center justify-center  hover:text-black "><Link to='/' >Home</Link></li>
            <li  className="w-20  h-10 flex items-center justify-center  hover:text-black   hover:bg-sky-300"><Link to='/post' >Post</Link></li>
            <li  className=" h-10 flex items-center justify-center  hover:text-black  hover:bg-sky-300 w-20"><Link to='/about' >About</Link></li>
        </ul>
    </nav>
}


export default Nav