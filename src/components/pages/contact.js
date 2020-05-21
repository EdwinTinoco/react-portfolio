import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/auth/login.jpg"

export default function () {
    return (
        <div className="content-page-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + contactPagePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}

            />
            <div className="right-column">
                <div className="contact-bullet-points">

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="link" />
                        </div>

                        <a href="https://github.com/EdwinTinoco" className="text">Github</a>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="link" />
                        </div>

                        <a href="https://www.linkedin.com/in/edwin-jared-lopez-tinoco-3684391a5/" className="text">LinkedIn</a>
                    </div>
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>

                        <div className="text">801-755-7608</div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>

                        <div className="text">jaredlotic@gmail.com</div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>

                        <div className="text">Lehi, UT</div>
                    </div>
                </div>
            </div>
        </div>
    )
}