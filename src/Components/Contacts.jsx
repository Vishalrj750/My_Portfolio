import React from "react";
import styled from "styled-components";

const ContactsWrapper = styled.div`
.contact{
    height: 90vh;
    display: flex;
    gap: 100px;
    align-items: center;
    justify-content: center;
    background-color: black;
}
.contact-left{
    display: flex;
    gap: 30px;
    flex-direction: column;
    font-size: 25px;
    color: white;
}
.contact-right{
    display: flex;
    gap: 30px;
    flex-direction: column;
    font-size: 25px;
    color: white;
}
.b{
    margin-right: 30px;
    margin-left: 20px;
    color: blue;
}
.contact-a{
    text-decoration: none;
    color: white;
    cursor: pointer;
}
`

function Contacts() {
    return(
        <ContactsWrapper>
            <div className="contact">
                <div className="contact-left">
                    <p><b className="b">Name</b>Vishal Singh</p>
                    <p><b className="b">Phone</b>8574031285</p>
                    <p><b className="b">Email</b>vishalsingh8574031285@gmail.com</p>
                </div>
                <div className="contact-right">
                <p><b className="b">City</b>Gorakhpur</p>
                <p><b className="b">GitHub</b><a href={ `https://github.com/Vishalrj750` } target={ `_blank` } className="contact-a" >Wanna visit on my GitHub</a></p>
                <p><b className="b">Linkedin</b><a href={ `https://www.linkedin.com/in/vishal-singh-a9b811190/` } target={ `_blank` } className="contact-a">Have a Look</a></p>
                </div>
            </div>
        </ContactsWrapper>
    )
}

export { Contacts }