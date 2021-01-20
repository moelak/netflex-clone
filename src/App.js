import React from 'react';
import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';

function App() {
	return (
		<div className="App">
			<Banner />
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow={true}
			/>
			<Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />

			<Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />

			<Row title="ACTION Movies" fetchUrl={requests.fetchActionMovies} />

			<Row title="COMEDY Movies" fetchUrl={requests.fetchComedyMovies} />

			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

			<Row
				title="Documentaries Movies"
				fetchUrl={requests.fetchDocumentaries}
			/>
		</div>
	);
}

export default App;
