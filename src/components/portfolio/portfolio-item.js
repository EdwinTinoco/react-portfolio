import React from 'react';
import {Link} from "react-router-dom";

export default function(props){    //Aqui no se uso class name ni render() porque esta es una function component
    return (
        <div>
            <h3>{props.name}</h3>
            <h4>{props.url}</h4>

            <Link to={`/portfolio/${props.slug}`}>Link</Link>
        </div>
    );
}