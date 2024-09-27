export type PostType={
    
    id:string
    title:string 
    body:string 
    datetime:string
}
export interface FeedProps {
    posts:PostType[]
}
export interface SignlePost {
    post:PostType
}