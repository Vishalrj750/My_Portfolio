import React from "react";
import styled from "styled-components";
import Me from "../img/vishal.png";

const AboutWrapper = styled.div`
.a-main{
    background-color: black;
}
.a{
    display: flex;
    gap: 25px;
}
.a-left{
    padding: 25px;
}
.a-right{
    padding: 25px;
}
.a-img{
    width: 120%;
    border-radius: 20px;
}
.a-right-about{
    color: blue;
    padding: 10px;
    text-align: center;
}
.a-right-intro{
    font-size: 20px;
    color: white;
}
.a-prof-title{
    text-align: center;
    color: blue;
    padding: 25px;
}
.a-prof{
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;
}
.a-prof-ul{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.a-prof-li{
    font-size: 20px;
    font-weight: 400;
    color: white;
}
.project-title{
    text-align: center;
    color: blue;
    padding: 25px;
}
.project-list-1{
    text-align: center;
    color: white;
    padding-bottom: 15px;
}
.project-list-ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
}
.project-list-li{
    font-size: 20px;
    color: white;
}
.kfc-link{
    text-decoration: none;
    color: gray;
    cursor: pointer;
}
`

function About() {
    return(
        <AboutWrapper>
            <div className="a-main">
                <h1 className="a-right-about">About Me</h1>
                <div className="a"> 
                    <div className="a-left">
                        <img src={ Me } alt="" className="a-img" />
                    </div>
                    <div className="a-right">
                        
                        <p className="a-right-intro">Hello! My name is Vishal and I enjoy creating things that live on the Internet. My interest in web development started back last year when I was trying to edit things on the web - taught me a lot about HTML and CSS.</p>
                        <br />
                        <p className="a-right-intro">Fast forwarding to today, I built a number of web applications and 2 major projects. Learned a great deal about teamwork, leadership and communication. After months of regorous training, here I am looking for an oppertunity as a full stack web developer.</p>
                    </div>
                </div>
                <div className="prof">
                    <h1 className="a-prof-title">Proficiencies</h1>
                    <div className="a-prof">
                        <ul className="a-prof-ul">
                            <li className="a-prof-li">HTML</li>
                            <li className="a-prof-li">CSS</li>
                            <li className="a-prof-li">Javascript</li>
                            <li className="a-prof-li">ReactJS</li>
                        </ul>
                        <ul className="a-prof-ul">
                            <li className="a-prof-li">ReduxJS</li>
                            <li className="a-prof-li">MongoDB</li>
                            <li className="a-prof-li">Express</li>
                            <li className="a-prof-li">NodeJS</li>
                        </ul>
                    </div>
                </div>
                <div className="project">
                    <h1 className="project-title">My Projects</h1>
                    <div className="project-list">
                        <h2 className="project-list-1">KFC Clone</h2>
                        <ul className="project-list-ul">
                            <li className="project-list-li">Made KFC Clone with a team of 4 members</li>
                            <li className="project-list-li">Accomplished the task in the time span of 7 days</li>
                            <li className="project-list-li">Being a team lead, had some extra responsibility of overall functionality of website</li>
                            <li className="project-list-li"><a href={ `https://github.com/Vishalrj750/Final_Kfc_Repo.git` } target={ `_blank` } className="kfc-link">Click to see Repository on GitHub</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </AboutWrapper>
    )
}

export { About }