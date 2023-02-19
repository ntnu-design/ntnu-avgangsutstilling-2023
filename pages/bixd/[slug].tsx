import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/layout/container'
import Layout from '../../components/layout/layout'
import { getPostBySlug, getPosts } from '../../lib/api'
import PostTitle from '../../components/posts/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import Navbar from '../../components/navigation/navbar'

type Props = {
  post: PostType
  preview?: boolean
}

export default function Post({ post, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (

    <Layout preview={preview}>
      <Head>
        <title>{`Avgangsutstilling 2023`}</title>
      </Head>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Navbar />

            <article className="mb-32">
              <Head>
                <title>
                </title>
                <meta property="og:image" content="" />
              </Head>
              <PostTitle>{post.title}</PostTitle>
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const slug = `bixd/${params.slug}/content.md`;

  const post = getPostBySlug(slug, [
    'title',
    'slug',
    'author',
    'content',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getPosts(['slug'], "bixd");
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: `${post.slug}/content.md`,
        },
      }
    }),
    fallback: "blocking",
  }
}
