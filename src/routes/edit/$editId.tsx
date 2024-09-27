/* eslint-disable @typescript-eslint/no-unused-vars */
import { createFileRoute,useNavigate} from '@tanstack/react-router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PostType } from '../../type/post'
import { format } from 'date-fns'
import { useUpdatePost } from '../../services/mutations'
// import { usePostsContext } from '../../context/PostsProvider'

export const Route = createFileRoute('/edit/$editId')({
  component: EditComponent
})

function EditComponent() {
    const {editId}=Route.useParams()
    const navigate = useNavigate()
    const updatePost=useUpdatePost()
    // const {posts}=usePostsContext()
    const {register,handleSubmit}=useForm<PostType>()
    

    const handleCreatePost:SubmitHandler<PostType>=(data:PostType) => {
      
      const datetime=format(new Date(),'MMMM dd, yyyy pp')
       const newPost={id:editId,datetime:datetime,body:data.body,title:data.title}
       console.log(newPost)
        updatePost.mutate(newPost)
       navigate({to:'/'})

    }

    return (
      <div>
      <h1 className='pl-3 text-xl font-bold  pt-3 text-center '>New Post</h1>
      <form  className='flex flex-col gap-5 p-5 justify-start  items-center ' onSubmit={handleSubmit(handleCreatePost)}>
        <input type='text'
        className=' w-full md:w-2/3 border-2 border-black  border-solid  text-black pl-3 min-h-12 max-h-12 rounded-xl focus:bg-gray-100 '
        {...register("title")}
        

               required
               />
               <textarea className=' w-full bg-gray-200  md:w-2/3 min-h-48 max-h-52 rounded-lg  p-3 text-lg tracking-wide'
                 {...register("body")}

               required

               />
               <button type='submit' className='w-full md:w-2/3 p-2  bg-primary text-white  rounded-md ' >Submit</button>

      </form>
      </div>
    )
  }
