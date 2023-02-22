interface Props {
  author: string
  postData: Array<{ data: any; slug: string }>
  images: string[]
}

export default function AuthorPage({ author, postData, images }: Props) {
  return (
    <div>
      {images.map((image) => (
        <img key={image} src={`/${author}/${image}`} />
      ))}
      {postData.map((post) => (
        <div key={post.slug}>
          <h2>{post.data.title}</h2>
          <p>{post.data.description}</p>
        </div>
      ))}
    </div>
  )
}
