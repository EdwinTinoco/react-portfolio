import React, {Component} from 'react';

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component{   // Esta es una class base component
    constructor(){
        super();
        
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            data: [
                {title: "Quip"},
                {title: "Eventbrite"},
                {title: "Ministry Safe"},
                {title: "Swim Away"}   
            ]              
        };
    }

    portfolioItems(){
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
        })
    }

    render(){
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}
            </div>
        )
    }
}