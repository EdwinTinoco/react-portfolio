import React, {Component} from 'react';

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component{   // Esta es una class base component
    // State
    // Lifecycle hooks
    render(){
        return (
            <div>
                <h2>Portfolio items go here updated...</h2>

                <PortfolioItem />
            </div>
        )
    }
}