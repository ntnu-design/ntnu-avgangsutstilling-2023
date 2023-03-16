import { StudentItem, StudyProgramme } from "./../interfaces/student"
import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const CONTENT_DIRECTORY = join(process.cwd(), "_content")

export function getStudentSlugs(studyProgramme: StudyProgramme): string[] {
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

export function getStudentBySlug(
    slug: string,
    fields: string[] = []
): StudentItem {
    const realSlug = slug.replace("/content.md", "")
    const fullPath = join(CONTENT_DIRECTORY, slug)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)

    const items: StudentItem = {
        title: "",
        slug: "",
        bio: "",
        profile_picture: "",
        portfolio: "",
        email: "",
        socials: {},
        project_image_1: "",
        project_desc_1: "",
        project_desc_2: "",
        project_image_2: "",
        project_image_3: "",
        project_desc_3: "",
    }

    fields.forEach((field) => {
        if (field === "slug") items[field] = realSlug
        if (typeof data[field] !== "undefined") items[field] = data[field]
    })

    return items
}

export function getStudents(
    fields: string[] = [],
    studyProgramme: StudyProgramme
): StudentItem[] {
    const slugs = getStudentSlugs(studyProgramme)
    const posts = slugs.map((slug) => getStudentBySlug(slug, fields))

    posts.sort(() => Math.random() - 0.5)

    return posts
}
