/* eslint-disable @typescript-eslint/no-unused-vars */
// import {posts} from '../data/db.json'

import { usePostsContext } from "../context/PostsProvider";
import { usePosts } from "../services/queries";
import { FeedProps } from "../type/post";
import Post from "./Post";

function Home() {
  const postsQuery = usePosts();

  const {searchResult,posts}=usePostsContext()
  console.log(searchResult)
  
  return (
    <main className="flex-grow  h-full ">
      {
        // postsQuery.data?.map((item) => JSON.stringify(item))

        // <Feed posts={postsQuery.data} />
        // postsQuery.data?.map(item => <Post key={item.id} id={item?.id} title={item.title} body={item.body} datetime={item.datetime} />)
         searchResult?.map(item => <Post key={item.id} id={item?.id} title={item.title} body={item.body} datetime={item.datetime} />)
        
       
      }
      
    </main>
  );
}

export default Home;
