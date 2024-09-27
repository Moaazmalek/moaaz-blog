/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useState } from "react"
import { usePosts } from "../services/queries"
import { PostType } from "../type/post"


type postsContext= {
    searchResult: PostType[] | undefined
    getSearchResult:(result:string)=> void
    posts:PostType[] | undefined
}
const PostsContext=createContext({} as postsContext)
export function usePostsContext() {
    return useContext(PostsContext)
}

type ChildrenProps={
    children:React.ReactNode | undefined
}

export function PostsProvider ({children}:ChildrenProps) {
    const {data:posts}=usePosts()
    


    const [searchResult,setSearchResult]=useState<PostType[] | undefined >()

    function getSearchResult(result:string) {
        if(result?.length) {
            console.log('your result here inside is ',result)
            const filteredPosts=posts?.filter(post => 
                post.body.toLowerCase().includes(result.toLowerCase()) ||
                post.title.toLowerCase().includes(result.toLowerCase())
            )
            console.log('my filter result is ',filteredPosts)
            setSearchResult(filteredPosts)
        }
         else {
            setSearchResult(posts)
        }
       

    }
    return  <PostsContext.Provider value={{searchResult,getSearchResult,posts}}>
        {children}
    </PostsContext.Provider>
        
}