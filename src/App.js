import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
function App() {
  return (
    <div className="App">
      {/* Navbar  */}

      {/* Banner  */}
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
    </div>
  );
}

export default App;
