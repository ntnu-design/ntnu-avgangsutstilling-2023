import { StudentItem, StudyProgramme } from "../interfaces/student"

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

// SORTING

function seededRandom(seed: number) {
    const x = Math.sin(seed) * 10000
    return x - Math.floor(x)
}

function getSeededRandomNumber(seed: number, min: number, max: number) {
    const random = seededRandom(seed)
    return min + random * (max - min)
}

function stringToHash(str: string) {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i)
        hash = (hash << 5) - hash + charCode
        hash |= 0 // Convert to a 32-bit integer
    }
    return hash
}

export const sortStudents = (students: StudentItem[], sortOrder: string) => {
    if (sortOrder === "alphabetical") {
        return [...students].sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortOrder === "random") {
        const currentDate = new Date()

        // To test the shuffle for tomorrow, uncomment the following line:
        // currentDate.setDate(currentDate.getDate() + 1)

        const seed =
            currentDate.getFullYear() * 10000 +
            (currentDate.getMonth() + 1) * 100 +
            currentDate.getDate()
        return [...students].sort((a, b) => {
            const randomA = getSeededRandomNumber(
                seed + stringToHash(a.studyProgramme),
                0,
                1
            )
            const randomB = getSeededRandomNumber(
                seed + stringToHash(b.studyProgramme),
                0,
                1
            )
            return randomA - randomB
        })
    }
    return students
}
