import { useEffect, useState } from "react";

const Popular = () => {
  const [res, setRes] = useState([])

  const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWJjNDc0N2EwZmE2MjRiYjUzZDFlNzc2ZTQ3NjEwMSIsInN1YiI6IjY1NGE1NjM0MzkxYjljMDExZDMwMDVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VShTFbPKOM-EGatsl2UDV9nxkOH3PRax8ptmbRBartA'
    }
  };

  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(json => setRes(json.results));
  }, []);


  return (
    <div className="container mt-5 py-5">
      <div className="bg-second p-3 rounded shadow text-center">
        <i className="fa-solid fa-truck-ramp-box f-four fs-1"></i>
        <h4 className="display-5 text-light">Free To Watch</h4>
      </div>

      <div className="fetch-movies mt-5 row">
        {
          res.map((movie) => (
            <div key={movie.id} className="col-md-3 mb-3">
              <img className="img-fluid card-img-top rounded-top shadow" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              <div className="body p-2 border rounded-bottom">
                <h1>{`${movie.name} || ${movie.title}`}</h1>
                <div className="type p-2 d-flex align-items-center justify-content-between mb-3">
                  <i className="fa-solid fa-font-awesome fs-2 f-third"></i>
                  <span className="fw-semibold text-dark">{movie.media_type}</span>
                </div>
                {/* <div className="dsc">
                  <h4>Description: </h4>
                  <span className="lead">{`Overview: ${movie.overview.split(" ").slice(0, 18).join(" ") + "..."}`}</span>
                </div> */}
                <div className="date p-2 d-flex align-items-center justify-content-between mb-3">
                  <i className="fa-regular fa-calendar-days fs-2 f-third"></i>
                  <span className="fw-semibold text-dark">{movie.release_date}</span>
                </div>
                <div className="rate p-2 d-flex align-items-center justify-content-between mb-3">
                  <i className="fa-solid fa-star-half-stroke fs-2 f-third"></i>
                  <span className="fw-semibold p-2 bg-second rounded-pill text-light">{movie.vote_average}</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Popular
