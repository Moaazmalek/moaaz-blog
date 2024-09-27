import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../api/axios"


export const usePosts=() => {
  return useQuery({
    queryKey:['posts'],
    queryFn:getPosts,
    
  })
}
// export function usePosts(ids:(number | undefined)[] | undefined) {
//     return useQueries({
//         queries: (ids ??[]).map(id => {
//             return {
//                 queryKey:['post',{id}],
//                 qerryFn:() => getPost(id!)
//             }
//         })
//     })

// }

