
import { Link } from 'react-router-dom';
import hero from '../assets/undraw_home_cinema_l7yl(1).svg';
import Popular from '../components/Popular';

const Home = () => {
  return (
    <div className='container'>
      <div className="hero mt-5 py-5">
        <div className="row">
          <div className="col-md-6 py-5 d-flex flex-column gap-4">
            <h1 className='display-2 f-second fw-semibold'>Welcome.</h1>
            <span className='lead'>Millions of movies, TV shows and people to discover.</span>
            <br />
            <Link to='/Movies'>
            <button className='btn-main w-50 py-3 rounded bg-main shadow'>Watch Now</button>
            </Link>
          </div>
          <div className="col-md-6">
          <img className="img-fluid" width={500} src={hero} alt="img-hero" />
          </div>
        </div>
        <Popular />
      </div>
    </div>
  )
}

export default Home
