import React from "react";
import JobCard from './JobCard';
import { Card } from "@mui/material";

function Applied() {
    return(
        <div>
            applied
            <Card className="drag">
                <JobCard />
            </Card>
        </div>
    )
}

export default Applied