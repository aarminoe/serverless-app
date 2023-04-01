import React from "react";

function JobCard({job}) {

    function moveUp(e) {
        console.log(job)
    }

    function moveBack() {
        
    }

    return(
        <div>
            <button onClick={moveBack}>MoveBack</button>
            JobCard
            <button onClick={moveUp}>MoveUp</button>
        </div>
    )
}

export default JobCard