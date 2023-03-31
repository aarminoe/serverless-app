import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return(
        <div>
            <Link to={'/round-1'}>Round 1</Link>
            <Link to={'/round-2'}>Round 2</Link>
            <Link to={'/round-3'}>Round 3</Link>
            <Link to={'/offers'}>Offers</Link>
            <Link to={'/waiting'}>Waiting</Link>
            <Link to={'/applied'}>Applied</Link>
        </div>
    )
}

export default Header