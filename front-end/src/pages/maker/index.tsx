import { type NextPage } from "next";
import styles from "./index.module.css";
import { useQuery } from "react-query";
import axios from 'axios'
import Job from "~/components/Job";

// @ts-nocheck
interface Job {
  id: number
  type: string;
  description: string;
  //quoteCount: number;
  //status: 
  budget: number;
  createdBy: number;

}

const MakerPage: NextPage = () => {
  // get all jobs and store in local state
  const  query = useQuery({ queryKey: ['jobs'], queryFn: fetchJobs })
  
  
  if (query.status === 'success') {
    // @ts-ignore
    console.log(query.data.data.jobs)
    return (
      <main className={styles.main}>
        <h1>List All Jobs</h1>
        
        {query.data.data.jobs?.map((job) => (
          <Job job={job} />
        ))}

  
      <h1>Filter</h1>

      </main>
    );
};
}


const fetchJobs = async () => {
  const res = await axios.get( 'http://ec2-3-26-19-82.ap-southeast-2.compute.amazonaws.com/api/jobs');

  return res;
}

export default MakerPage;
