const [res,setRes]= useState([])

  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
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
      .then(json => setRes(json.results[0]));
  }, []); 