import React from 'react'
import '../styles.css'

//Logo imports
import githubLogo from '../assets/githubLogo.png'
import linkedInLogo from '../assets/linkedInLogo.png'

/*
/ The Header component contents the header which is serves the purpose
/ of a Navbar. It contains my contact information as well as links to
/ my LinkedIn and Github.
*/
function Header() {

    //Constants for links
    const benquery = "https://benandqueries.com"
    const github = "https://github.com/dbinlee3"
    const linkedIn = "https://www.linkedin.com/in/dong-bin-lee-065666235/"

    return (
        <>
            <div className="headerWrapper">
                <section className="headerContext">
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
                </section> {/*End of headerContext*/}

                <section className="headerLogos">

                    {/*Github Logo*/}
                    <a 
                        href={github}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img className="logo github" src={githubLogo} alt="Github Page" />
                    </a>

                    {/*LinkedIn Logo*/}
                    <a 
                        href={linkedIn}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img className="logo linkedin" src={linkedInLogo} alt="LinkedIn Page" />
                    </a>
                </section> {/*End of headerLogos*/}
            </div> {/*End of headerWrapper*/}
        </>
    )
}

export default Header