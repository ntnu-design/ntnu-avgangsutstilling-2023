import { StudyProgramme } from "../interfaces/student"

/**
 * Returns a heading based on the input study programme.
 * @param studyProgramme - the study programme code (e.g. "bwu", "bixd", "bmed")
 * @returns the heading corresponding to the study programme, or "Avgangsutstilling" if the study programme is unknown
 */

export const getHeading = (studyProgramme: StudyProgramme): string => {
    switch (studyProgramme) {
        case "bwu":
            return "Webutvikling"
        case "bixd":
            return "Interaksjonsdesign"
        case "bmed":
            return "Grafisk Design"
        default:
            return "Avgangsutstilling"
    }
}
