import React from 'react'

const Navbar = () => {
    return (
        <div className="container fixed-top">
            <nav className="navbar navbar-expand-lg bg-light opacity-75">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">Kuroni</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#whoAmI">Who am I ?</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#projects" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Projects
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#finished-projects">Finished</a></li>
                                    <li><a className="dropdown-item" href="#wip-projects">Work in progress...</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">Contact me</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar