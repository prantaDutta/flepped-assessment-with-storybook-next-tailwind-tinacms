import { ReactNode } from 'react'
import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { client } from '../../.tina/__generated__/client'
import { Layout } from '../components/Layout'

interface IHomeProps {
  children?: ReactNode
  query: any
  variables: any
  data: any
}

const Home: React.FC<IHomeProps> = ({ data: tinaData, variables, query }) => {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables,
    data: tinaData,
  })

  const content = data.page.body
  return (
    <Layout>
      <TinaMarkdown content={content} />
    </Layout>
  )
}

export default Home

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: 'home.mdx',
  })

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  }
}
