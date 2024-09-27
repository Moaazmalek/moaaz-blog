/* eslint-disable @typescript-eslint/no-unused-vars */
import { createRootRoute , Outlet} from "@tanstack/react-router";
import Header from '../component/Header'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import { useEffect, useState } from "react";
import { usePostsContext } from "../context/PostsProvider";

export const Route=createRootRoute({
    component:RootComponent
})
function RootComponent() {
   
    
   
    return <div className="bg-slate-300 w-full max-w-4xl  flex flex-col  border-2 border-gray-500 max-h-screen min-h-screen">
              <Header/>
              {/* <Nav search={search} setSearch={setSearch}/> */}
              <Nav/>
   <div className="flex-grow bg-[#fff] overflow-auto ">
   <Outlet />
   </div>
    <Footer/>  

    </div>
}