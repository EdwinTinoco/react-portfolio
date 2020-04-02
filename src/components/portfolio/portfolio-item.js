import React from 'react';

export default function(props){    //Aqui no se uso class name ni render() porque esta es una function component
    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>
        </div>
    )
}