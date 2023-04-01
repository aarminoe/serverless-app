import React from "react";
import JobCard from './JobCard';
import { Card } from "@mui/material";
import { useState } from "react";

function Applied() {

    const [appliedJobs, setAppliedJobs] = useState(['job',"jog",'LOL'])

    return(
        <div>
            applied
            <Card  className="drag">
                {appliedJobs.map((job)=> {
                    return(
                        <JobCard job={job}/>
                    )
                })}
            </Card>
        </div>
    )
}

export default Applied