const DigiNav = () => {
    return (
        <header style= {{textAlign:"left"}}>
            <nav className="navbar navbar-expand-md" style={{ backgroundColor: 'rgba(255, 69, 0, 0.6)' }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#about"><i class="fa-solid fa-house"></i>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#professionalExperience"><i class="fa-solid fa-list"></i>Professional Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#achievements"><i class="fa-solid fa-info"></i>Achievements</a>
                            </li>
                            <li className="nav-item">  
                                <a className="nav-link" href="#technicalSkills"><i class="fa-solid fa-list"></i>Technical Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#education"><i class="fa-solid fa-building-columns"></i>Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#certifications"><i class="fa-solid fa-certificate"></i>Certifications</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contactMe"><i class="fa-solid fa-address-book"></i>Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default DigiNav;

 
