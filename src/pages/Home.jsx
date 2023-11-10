
import hero from '../assets/undraw_home_cinema_l7yl(1).svg';

const Home = () => {
  return (
    <div className='container'>
      <div className="hero mt-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='display-2 f-main fw-semibold'>Welcome.</h1>
            <span className='lead'>Millions of movies, TV shows and people to discover.</span>
          </div>
          <div className="col-md-6">
          <img className="img-fluid" width={500} src={hero} alt="img-hero" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
