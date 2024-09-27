import axios from 'axios'
import { PostType } from '../type/post'
const BASE_URL='http://localhost:8080'
const axiosInstance=axios.create({baseURL:BASE_URL})

export const getPosts=async() => {
    return (await axiosInstance.get<PostType[]>('/posts')).data
}
export const createPost=async(data:PostType) => {
    await axiosInstance.post('/posts',data)
}
export const updatePost=async(data:PostType)=> {
    await axiosInstance.put(`/posts/${data.id}`,data)
}
export const deletePost=async(data:PostType) => {
   
    await axiosInstance.delete(`posts/${data.id}`)
}