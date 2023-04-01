import React from "react";

function JobCard() {

    function moveUp() {
        console.log()
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