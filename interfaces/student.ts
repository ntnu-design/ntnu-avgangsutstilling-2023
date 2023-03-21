export interface StudentItem {
    title: string
    student: string
    profile_picture: string
    bio: string
    portfolio: string
    email: string
    linkedin?: string
    twitter?: string
    facebook?: string
    behance?: string
    instagram?: string
    studyProgramme: string
    studyProgram: string
    p1_headline_1: string
    p1_headline_2: string
    project_image_1: string
    project_desc_1: string
    p2_headline_1?: string
    p2_headline_2?: string
    project_image_2?: string
    project_desc_2?: string
    p3_headline_1?: string
    p3_headline_2?: string
    project_image_3?: string
    project_desc_3?: string
    p4_headline_1?: string
    p4_headline_2?: string
    project_image_4?: string
    project_desc_4?: string
    p5_headline_1?: string
    p5_headline_2?: string
    project_image_5?: string
    project_desc_5?: string
}

export type StudyProgramme = "bwu" | "bixd" | "bmed" | "avgang"

export interface StudyProgrammeParams {
    studyProgramme: StudyProgramme
}
