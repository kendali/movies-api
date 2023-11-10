import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [show,setShow] = useState(false)
    const navList = ['Home', 'Movies', 'TV Shows', 'More'];

    const handleClickSearch = ()=>{
        setTimeout(() => {
            setShow(!show)
        }, 150);
    }
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
                                    <Link key={element} to={element}>
                                        <li className="nav-item" key={element}>
                                            <a className="nav-link text-light fs-4" aria-current="page" href="#">
                                                {element}
                                            </a>
                                        </li>
                                    </Link>
                                ))
                            }
                        </ul>
                        <div className="icon-search">
                            <i onClick={handleClickSearch} className="fa-brands fa-searchengin fs-2 f-four"></i>
                        </div>
                    </div>
                </div>
            </nav>
            {
                show ? 
                <div className="search position-relative">
                <i className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y f-third fs-3 px-2   "></i>
                <input type="text" className="w-100 f-ct px-5" placeholder="Search for a movie , tv show..." />
            </div>:
            null 
            }
        </div>
    )
}

export default NavBar
