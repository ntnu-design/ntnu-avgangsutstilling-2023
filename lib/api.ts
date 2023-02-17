import fs from 'fs'
import { join } from 'path'
import { GetServerSideProps } from 'next';
import matter from 'gray-matter'

const CONTENT_DIRECTORY = join(process.cwd(), '_content')

export function getPostSlugs(studyProgramme: string) {
  return fs.readdirSync(CONTENT_DIRECTORY)
    .filter(folderName => folderName.toLowerCase() === studyProgramme.toLowerCase())
    .flatMap(studyProgrammeFolder =>
      fs.readdirSync(join(CONTENT_DIRECTORY, studyProgrammeFolder))
        .flatMap(authorFolder =>
          fs.readdirSync(join(CONTENT_DIRECTORY, studyProgrammeFolder, authorFolder))
            .filter(file => file.endsWith('.md'))
            .map(file => `${studyProgrammeFolder}/${authorFolder}/${file}`)
        )
    )
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace("/content.md", '')
  const fullPath = join(CONTENT_DIRECTORY, slug);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string
  }
  const items: Items = {}
 
  fields.forEach((field) => {
    if (field === 'slug') items[field] = realSlug
    if (field === 'content') items[field] = content
    if (typeof data[field] !== 'undefined') items[field] = data[field]
  })

  return items
}

export function getPosts(fields: string[] = [], studyProgramme: string) {
  const slugs = getPostSlugs(studyProgramme);
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));

  posts.sort(() => Math.random() - 0.5);

  return posts;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const author = params?.author as string;
  const authorPath = join(process.cwd(), '_content', author);
  const files = fs.readdirSync(authorPath);

  const postData = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const fullPath = join(authorPath, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return { data, slug: file.replace(/\.md$/, '') };
    });

  const images = files.filter((file) => file.endsWith('.png'));

  return { props: { author, postData, images } };
};