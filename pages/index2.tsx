import Link from 'next/link'
import { allBios, Bio } from 'contentlayer/generated'

export async function getStaticProps() {
  const bios: Bio[] = allBios
  return { props: { bios } }
}

function PostCard(bio: Bio) {
  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link
          href={bio.url}
          className="text-blue-700 hover:text-blue-900"
          legacyBehavior>
          {bio.title}
        </Link>
      </h2>
    </div>
  );
}

export default function Home({ bios }: { bios: Bio[] }) {
  return (
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Next.js Example</h1>

      {bios.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
