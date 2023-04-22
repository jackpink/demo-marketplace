import Link from "next/link";


const Job = ({ job }) => {
    const link = "http://http://ec2-3-26-19-82.ap-southeast-2.compute.amazonaws.com/job/" + String(job.id)
    return(
        <Link href={link} target="_blank">
            <p>{job.type}</p>
            <p>{job.description}</p>
        </Link>
    )
}

export default Job;