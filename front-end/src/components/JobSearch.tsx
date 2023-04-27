import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Job from "~/components/Job";

// @ts-nocheck
const filterJobs = (jobs, typeValue) => {
    // if type and job.type match then keep
    const filteredJobs = []
    console.log(jobs)
    jobs.forEach(job => {
        const jobType = job.type.toLowerCase();
        if (jobType.includes(typeValue.toLowerCase())) {
            filteredJobs.push(job)
            console.log(job.type, typeValue)
        }
    });
    return filteredJobs;
}

const JobSearch= ({ jobs }) => {
  // get all jobs and store in local state
  const [type, setType] = useState('');
  const [filteredJobs, setFilteredjobs] = useState(jobs);
  const updateSearchField = (e) => {
    setType(e.target.value)
    setFilteredjobs(filterJobs(jobs, e.target.value))
  }
  
    return (
      <>
        <h1>List All Jobs</h1>
        <TextField id="type-search" label="Search By Type" type="search" variant="filled" value={type} onChange={updateSearchField} />

        {filteredJobs?.map((job) => (
          <Job job={job} key={job.id} />
        ))}

      </>
    );
};

export default JobSearch;
