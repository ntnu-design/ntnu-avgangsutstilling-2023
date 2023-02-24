import React from "react"
import { useRouter } from "next/router"

const Student = () => {
    const router = useRouter()
    const { student } = router.query
    return <div>{student}</div>
}

export default Student
