import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { usePostsContext } from '../../context/PostsProvider'
import { useDeletePost } from '../../services/mutations'


export const Route = createFileRoute('/post/$postId')({
  component:SinglePage
})
function SinglePage() {
  
  const navigate=useNavigate()
  const {postId}=Route.useParams()
  const {posts}=usePostsContext()

  const post=posts?.find(item => (item.id).toString() === postId )
  const DeletePost=useDeletePost()
  const handleDelete= async () => {
          if(post) 
             DeletePost.mutate(post)
            navigate({to:'/'})

  }
  
  return <article className=''>
    {post && <section className='bg-slate-200 w-1/2   p-4'>
      <h1 className='text-2xl'>{post.title}</h1>

      <h1 className='text-sm text-gray-500 py-2'>{post.datetime}</h1>
      <h1 className='pb-3'>{post.body}</h1>
      <div className=' flex gap-5'>
      <button className=" bg-red-500 p-2 text-white font-bold rounded-sm hover:bg-red-800 "onClick={() => handleDelete()}>Delete</button>
      <button className=" bg-primary p-2 text-white font-bold rounded-sm hover:bg-sky-700"onClick={() => {navigate({to:'/'})}}>Cancle</button>
      <button className=" bg-green-500 p-2 text-white font-bold rounded-sm hover:bg-sky-700"onClick={() => {navigate({to:`/edit/${post.id}`})}}>Edit</button>
      </div>
      </section>}

  </article>
}