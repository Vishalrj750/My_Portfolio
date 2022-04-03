import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.div`
.nav{
    width: 100vw;
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;
    background-color: #cecece;
    padding: 10px;
    position: sticky;
    top: 0;
}
`

function Navbar() {
    return(
        <NavbarWrapper>
            <div className="nav">
                <Link to={`/`}><h3>Home</h3></Link>
                <Link to={`/about`}><h3>About</h3></Link>
                <Link to={`/resume`}><h3>Resume</h3></Link>
                <Link to={`/contact`}><h3>Contact</h3></Link>
            </div>
        </NavbarWrapper>
    )
}

export { Navbar }