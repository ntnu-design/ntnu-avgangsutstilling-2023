import Link from 'next/link';
import { getPosts } from '../../lib/api';
import Post from '../../interfaces/post'
import Container from '../../components/layout/container'
import Layout from '../../components/layout/layout'
import Head from 'next/head'
import Navbar from '../../components/navigation/navbar'

type Props = {
    posts: Post[]
}

export default function BixdIndex({ posts }: Props) {
    return (
        <Layout>
            <Head>
                <title>{`Avgangsutstilling 2023`}</title>
            </Head>
            <Container>
                <Navbar />
                <div>
                    <h1>Interaksjonsdesign</h1>
                    <ul>
                        {posts.map((post) => (
                            <li key={post.slug}>
                                <Link href={`/bixd/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </Layout>

    );
}

export const getStaticProps = async () => {
    const posts = getPosts([
        'title',
        'slug',
        'author',
    ], "BIXD")

    return {
        props: { posts },
    }
}

