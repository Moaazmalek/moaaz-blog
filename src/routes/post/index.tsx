import { createFileRoute } from '@tanstack/react-router'
import PostPage from '../../component/PostPage'

export const Route = createFileRoute('/post/')({
  component: PostPage
})
