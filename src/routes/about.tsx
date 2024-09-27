import { createFileRoute } from '@tanstack/react-router'
import { BsEmojiSmileUpsideDownFill } from "react-icons/bs";

export const Route = createFileRoute('/about')({
  component: () => <div className=' flex flex-col  items-center justify-center gap-3 w-full h-[545px]'><h1 className='font-bold text-2xl italic'>This website was developed by Moa'az Malek.</h1> <BsEmojiSmileUpsideDownFill className='text-3xl text-primary'/></div>,
})
