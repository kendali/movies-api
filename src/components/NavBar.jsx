
const NavBar = () => {

    const navList = ['Home', 'Movies', 'TV Shows', 'More'];
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-main shadow p-3">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <i className="fa-solid fa-video fs-1 f-four"></i>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                navList.map((element) => (
                                    <li className="nav-item" key={element}>
                                        <a className="nav-link text-light fs-4" aria-current="page" href="#">
                                            {element}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="search">
                        <i className="fa-brands fa-searchengin fs-2 f-four"></i>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar
