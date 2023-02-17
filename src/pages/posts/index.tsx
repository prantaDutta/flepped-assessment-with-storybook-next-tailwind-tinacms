import Link from 'next/link'
import { ReactNode } from 'react'
import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import client from '../../../.tina/__generated__/client'
import { PostConnectionQuery } from '../../../.tina/__generated__/types'
import { Layout } from '../../components/Layout'

interface IPostListProps {
  children?: ReactNode
  data: PostConnectionQuery
  query: any
  variables: any
}

const PostList: React.FC<IPostListProps> = (props) => {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })
  const postsList = data.postConnection.edges
  console.log(postsList)
  return (
    <Layout>
      <h1>Posts</h1>
      <div>
        {postsList?.map((post) => {
          const content = post?.node?.body as any
          return (
            <div key={post?.node?.id}>
              <Link
                className="text-primary"
                href={`/posts/${post?.node?._sys.filename}`}
              >
                {post?.node?._sys.filename}
              </Link>
              {content ? <TinaMarkdown content={content} /> : null}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default PostList

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.postConnection()

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  }
}
