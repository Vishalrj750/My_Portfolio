import React from "react";
import styled from "styled-components";
import Me from "../img/vishal.png";
import resume from "../img/resume1.pdf";

const HomeWrapper = styled.div`
.i{
    height: 90vh;
    display: flex;
    background-color: black;
}
.i-left{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.i-right{
    flex: 1;
    position: relative;
}
.i-left-wrapper{
    padding: 50px;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.i-Home{
    font-size: 30px;
    font-weight: 300;
    color: white;
}
.i-name{
    font-size: 60px;
    color: white;
}
.i-title{
    height: 50px;
    overflow: hidden;
}
.i-title-wrapper{
    height: 50px;
    animation: move 5s ease-in-out infinite alternate;
}
@keyframes move{
    50%{
        transform: translateY(-50px);
    }
    100%{
        transform: translateY(-100px);
    }
}
.i-title-item{
    height: 150px;
    font-size: 30px;
    font-weight: bold;
    color: #59b256;
    display: flex;
    align-items: center;
}
.i-img{
    margin-left: 180px;
    height: 100%;
    object-fit: cover;
    position: absolute;
}
.i-bg{
    clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    background-color: #59b256;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
}
.i-description{
    font-size: 22px;
    color: white;
}
.i-btn-resume{
    padding: 10px 20px 10px 20px;
    background-color: blue;
    color: white;
    border-radius: 20px;
    cursor: pointer;
}
.i-btn-resume:hover{
    padding: 10px 20px 10px 20px;
    background-color: white;
    color: blue;
    border-radius: 20px;
    cursor: pointer;
}
`

function Home() {
    return(
        <HomeWrapper>
            <div className="i">
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className="i-Home">Hii, My name is</h2>
                        <h1 className="i-name">Vishal Singh</h1>
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                {/* <div className="i-title-item">Front end Developer</div> */}
                                <div className="i-title-item">Full Stack Developer</div>
                            </div>
                        </div>
                        <p className="i-description">
                            Hi, I am a Full stack Web Developer based in Gorakhpur. I build things for web.
                        </p>
                        <div className="i-btn">
                        <a href={ resume } target={ `_blank` }><button className="i-btn-resume">Download Resume</button></a>
                        </div>
                    </div>
                </div>
                <div className="i-right">
                    <div className="i-bg"></div>
                    <img src={ Me } alt="" className="i-img" />
                </div>
            </div>
        </HomeWrapper>
    )
}

export { Home }