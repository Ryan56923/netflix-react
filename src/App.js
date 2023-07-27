import React from 'react';
import './App.css';
import Player from './Player';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
    <Nav />
    <Banner/>
    <Player
      isLargeRow
      title="NETFLIX ORIGINALS"
      featchURL={requests.fetchNetflixOriginals}
    />
      <Player title="Trending Now" featchURL={requests.fetchTrending}/>
      <Player title="Top Rated" featchURL={requests.fetchTopRated}/>
      <Player title="Action Movies" featchURL={requests.fetchActionMovies}/>
      <Player title="Comedy Movies" featchURL={requests.fetchComedyMovies}/>
      <Player title="Horror Movies" featchURL={requests.fetchHorrorMovies}/>
      <Player title="Romance Movies" featchURL={requests.fetchRomanceMovies}/>
      <Player title="Documentaries" featchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;

