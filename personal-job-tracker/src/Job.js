import React from "react";
import { useState } from "react";

function Job() {

    const [company, setCompany] = useState("")
    const [title, setTitle] = useState("")
    const [skills, setSkills] = useState("")

    function addJob(e) {
        e.preventDefault()
    }

    return(
        <form onSubmit={addJob}>
            <p>
                Company
                <input onChange={(e) => setCompany(e.target.value)}/>
            </p>
            <p>
                Title
                <input onChange={(e) => setTitle(e.target.value)}/>
            </p>
            <p>
                Skills Needed
                <input onChange={(e) => setSkills(e.target.value)}/>
            </p>
            <button>Add</button>
        </form>
    )
}

export default Job