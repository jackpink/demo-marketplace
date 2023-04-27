import Link from "next/link";
import styles from "./job.module.css";

const Job = ({ job }) => {
    const link = "/job/" + String(job.id)
    return(
        <Link className={styles.jobcard} href={link} target="_blank" >
            <p className={styles.cardTitle} >{job.type}</p>
            <p>{job.description}</p>
            <span>{job.address}</span>
        </Link>
    )
}

export default Job;