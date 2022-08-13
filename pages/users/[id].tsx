import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { id, name } = router.query
  return <p>Post: {id} --- {name}</p>
}

export default Post