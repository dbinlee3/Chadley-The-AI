import React, { Component } from 'react'
import { MenuItems } from './MenuItems.js'
import { Button } from '../button/Button.js'
import './header.css'


const benquery = "https://benandqueries.com"

class Header extends Component {

    state = { clicked: false }

    //Sets state to true/false, for icon click change
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return (
            <div className="headerItems">

                <div className="headerCenter">
                    <span className="headerText">Developed by </span>
                    <a className="dongBinLink" href={benquery}>Dong Bin (Ben) Lee</a>
                    <span className="headerText email">| dbinlee.3@gmail.com</span>
                </div>


                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                {/* Mobile Header */}
                <ul className={this.state.clicked ? 'header-menu active' : 'header-menu'}>
                    {MenuItems.map( (item, index) => {

                        /*Open links to new tab*/
                        return (
                            <li key={index}>
                                <a 
                                className={item.cName} 
                                href={item.url}
                                target="_blank" 
                                rel="noopener noreferrer">
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                {/* Landscape Header */}
                <span className="headerButtons">
                    <a 
                    href="https://github.com/dbinlee3"
                    target="_blank" 
                    rel="noopener noreferrer">
                        <Button className="headerButtons">GitHub</Button>
                    </a>
                </span>

                <span className="headerButtons">
                    <a 
                    href="https://www.linkedin.com/in/dong-bin-lee-065666235/"
                    target="_blank" 
                    rel="noopener noreferrer">
                        <Button className="headerButtons">LinkedIn</Button>
                    </a>
                </span>


            </div>
        )
    }
}

export default Header
