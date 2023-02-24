import React from 'react'
import {useRouter} from "next/router"

const StudyProgramme = () => {
    const router = useRouter()
    const {studyProgramme} = router.query
  return (
    <div>{studyProgramme}</div>
  )
}

export default StudyProgramme