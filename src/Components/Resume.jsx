import React from "react";
import styled from "styled-components";
import MyResume from "../img/resume.jpg";

const ResumeWrapper = styled.div`
.resume{
    width: 100vw;
    text-align: center;
    background-color: black;
}
.r-img{
    // width: 100%;
}
`

function Resume() {
    return(
        <ResumeWrapper>
            <div className="resume">
                <img src={ MyResume } alt="" className="r-img" />
            </div>
        </ResumeWrapper>
    )
}

export { Resume }