import { createRouter, RouterProvider } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import { QueryClientProvider,QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PostsProvider } from "./context/PostsProvider"
const queryClient=new QueryClient()

const router=createRouter({routeTree})
const  App:React.FC =()=> {
  

  return <QueryClientProvider client={queryClient} >
          <PostsProvider>
           <RouterProvider router={router}/>
        </PostsProvider>
        <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
 
}

export default App
