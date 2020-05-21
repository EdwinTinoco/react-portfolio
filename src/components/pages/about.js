import React from 'react';
import profilePicture from "../../../static/assets/images/bio/edwin-linkedin.jpg"

export default function () {
    return (
        <div className="content-page-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}

            />
            <div className="right-column">
                <h1>About Me</h1>
                Specialist in analysis, design and development of software, web applications and client / server applications.
                Database design and administration. I am a person with a strong sense of commitment, a high level of analysis,
                I make good interpersonal relationships, teamwork and results-oriented.<br></br>
                <br></br>
                In my experience as a software engineer, I have had the opportunity to work on projects where I have developed
                all the part of the front end, from the collection and analysis of information, presentation of the interface,
                UI / UX, and I have also developed all the back end logic, server connection, database design, API's development.<br></br>
                <br></br>
                One of my sayings is, if you want to develop a quality project, your database must be of quality,
                that is, the tables, fields, keys, views, stored procedures, etc., you must develop a very well designed and
                structure of your database, since in this way through your application you can consult and make the data crud
                easier with the least possible problem.
            </div>
        </div>
    )
}