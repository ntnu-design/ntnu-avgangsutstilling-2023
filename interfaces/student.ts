export interface StudentItem {
    title: string;
    slug: string;
    bio: string;
    profile_picture: string;
    portfolio: string;
    email: string;
    socials?: SocialItem;
    project_image_1: string;
    project_desc_1: string;
    project_desc_2: string;
    project_image_2: string;
    project_image_3: string;
    project_desc_3: string;
    project_image_4?: string;
    project_desc_4?: string;
    project_image_5?: string;
    project_desc_5?: string;
}

export interface SocialItem {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    facebook?: string;
    behance?: string;
}

export type StudyProgramme = "bwu" | "bixd" | "bmed" | "avgang";

export interface StudyProgrammeParams {
    studyProgramme: StudyProgramme;
}