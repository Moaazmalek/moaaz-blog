import { Link } from "@tanstack/react-router"
import { PostType } from "../type/post"

// function Post({id,title,datetime,body}:PostType) {
function Post(post:PostType) {
  return (
    <article className="mt-4 pb-3 border-b-2 border-gray-200  pl-5">
        <Link to={`/post/${post.id}`} >
        <h2 className="font-bold text-xl">{post.title}</h2>
        <p className="text-slate-500">{post.datetime}</p>
       
        </Link>
      <p>
        {
          
            (post.body.length <= 25) ?post.body:(
              `${ post.body.slice(0,25)}....`
            )
        }
      </p>
      
    </article>
  )
}

export default Post
