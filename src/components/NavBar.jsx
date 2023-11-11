import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [show, setShow] = useState(false)
    const navList = ['Home', 'Movies', 'TV Shows', 'More'];

    const handleClickSearch = () => {
        setTimeout(() => {
            setShow(!show)
        }, 150);
    }
    // Search Input : 
    // const [query, setQuery] = useState('');
    // const [results, setResults] = useState([]);

    // const handleInputChange = (e) => {
    //     setQuery(e.target.value);
    // };

    // const handleSearch = () => {
    //     fetch(
    //         `https://api.themoviedb.org/3/search/all?query=${query}&language=en-US&api_key=7ebc4747a0fa624bb53d1e776e476101`
    //     )
    //         .then((response) => response.json())
    //         .then((data) => console.log(data.results))
    //         .catch((error) => console.error('Error fetching search results:', error));
    // };
    // const url = `https://api.themoviedb.org/3/trending/all?query=${query}?language=en-US`;
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         accept: 'application/json',
    //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWJjNDc0N2EwZmE2MjRiYjUzZDFlNzc2ZTQ3NjEwMSIsInN1YiI6IjY1NGE1NjM0MzkxYjljMDExZDMwMDVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VShTFbPKOM-EGatsl2UDV9nxkOH3PRax8ptmbRBartA'
    //     }
    // };

    // useEffect(() => {
    //     fetch(url, options)
    //         .then(res => res.json())
    //         .then(json => console.log(json.results));
    // }, []);
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
                        <i  className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y f-third fs-3 px-2   "></i>
                        <input  type="text" className="w-100 f-ct px-5" placeholder="Search for a movie , tv show..." />
                    </div> :
                    null
            }
        </div>
    )
}

export default NavBar
