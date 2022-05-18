import React from 'react'
import '../styles.css'

import githubLogo from '../assets/githubLogo.png'
import linkedInLogo from '../assets/linkedInLogo.png'

function Header() {

    const benquery = "https://benandqueries.com"
    const github = "https://github.com/dbinlee3"
    const linkedIn = "https://www.linkedin.com/in/dong-bin-lee-065666235/"

    return (
        <div className="headerWrapper">

            <div className="headerContext">

                <p className="headerText">Developed by&nbsp;</p>
                <a 
                    className="benLogo" 
                    href={benquery}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Dong Bin (Ben) Lee
                </a>
                <p className="headerText">&nbsp;| dbinlee.3@gmail.com</p>

            </div>

            <div className="headerLogos">
                <a 
                    href={github}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img className="logo" src={githubLogo} alt="" />
                </a>

                <a 
                    href={linkedIn}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img className="logo" src={linkedInLogo} alt="" />
                </a>
            </div>
            
        </div>
    )
}

export default Header
