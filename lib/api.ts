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
        student: "",
        profile_picture: "",
        bio: "",
        portfolio: "",
        email: "",
        linkedin: "",
        twitter: "",
        facebook: "",
        behance: "",
        instagram: "",
        studyProgramme: "",
        p1_headline_1: "",
        p1_headline_2: "",
        project_image_1: "",
        project_desc_1: "",
        p2_headline_1: "",
        p2_headline_2: "",
        project_image_2: "",
        project_desc_2: "",
        p3_headline_1: "",
        p3_headline_2: "",
        project_image_3: "",
        project_desc_3: "",
        p4_headline_1: "",
        p4_headline_2: "",
        project_image_4: "",
        project_desc_4: "",
        p5_headline_1: "",
        p5_headline_2: "",
        project_image_5: "",
        project_desc_5: "",
    }

    fields.forEach((field) => {
        if (field === "studyProgramme") items[field] = realSlug
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
    return posts
}
