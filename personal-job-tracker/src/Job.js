import React from "react";
import { useState } from "react";

function Job() {

    const [company, setCompany] = useState("")
    const [title, setTitle] = useState("")
    const [skills, setSkills] = useState("")

    return(
        <form>
            <p>
                Company
                <input></input>
            </p>
            <p>
                Title
                <input></input>
            </p>
            <p>
                Skills Needed
                <input></input>
            </p>
            
        </form>
    )
}

export default Job