import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const CONTENT_DIRECTORY = join(process.cwd(), "_content")

export function getStudentSlugs(studyProgramme: string) {
    const slugs = fs
        .readdirSync(CONTENT_DIRECTORY)
        .filter(
            (folderName) =>
                folderName.toLowerCase() === studyProgramme.toLowerCase()
        )
        .flatMap((studyProgrammeFolder) =>
            fs
                .readdirSync(join(CONTENT_DIRECTORY, studyProgrammeFolder))
                .flatMap((authorFolder) =>
                    fs
                        .readdirSync(
                            join(
                                CONTENT_DIRECTORY,
                                studyProgrammeFolder,
                                authorFolder
                            )
                        )
                        .filter((file) => file.endsWith(".md"))
                        .map(
                            (file) =>
                                `${studyProgrammeFolder}/${authorFolder}/${file}`
                        )
                )
        )
    return slugs
}

export function getStudentBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace("/content.md", "")
    const fullPath = join(CONTENT_DIRECTORY, slug)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)

    type Items = {
        [key: string]: string
    }
    const items: Items = {}

    fields.forEach((field) => {
        if (field === "slug") items[field] = realSlug
        if (typeof data[field] !== "undefined") items[field] = data[field]
    })

    return items
}

export function getStudents(fields: string[] = [], studyProgramme: string) {
    
    const slugs = getStudentSlugs(studyProgramme)
    const posts = slugs.map((slug) => getStudentBySlug(slug, fields))

    posts.sort(() => Math.random() - 0.5)

    return posts
}
