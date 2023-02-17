import { GetServerSideProps } from 'next'
import { ReactNode } from 'react'
import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import client from '../../.tina/__generated__/client'
import { Layout } from '../components/Layout'
import { Button } from './../components/Button'

interface IPageProps {
  children?: ReactNode
  query: any
  variables: any
  data: any
}

const Page: React.FC<IPageProps> = ({
  children,
  query,
  variables,
  data: tinaData,
}) => {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables,
    data: tinaData,
  })

  const content = data.page.body
  return (
    <Layout>
      {data.page._sys.filename === 'button' && <Button {...data.page} />}
      <TinaMarkdown content={content} />
    </Layout>
  )
}

export default Page

// This is an example of a page generated with Serverside Rendering.
// This can be switched to a static page by using getStaticProps
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.page({
    relativePath: `${params?.slug}.mdx`,
  })

  return {
    props: {
      data,
      query,
      variables,
    },
  }
}
