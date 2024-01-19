//It is in IFEE that will be excuted whenever we got to the movie page and display all the details of the selected Movie
(function () {
	const urlParams = new URLSearchParams(window.location.search);
	const imdbId = urlParams.get("imdbID");

	fetch(`http://www.omdbapi.com/?apikey=c0f0e6d3&i=${imdbId}&plot=full`)
		.then((data) => {
			return data.json();
		})
		.then((data) => {
            //It is a loader which is removed when the promise is fullfilled of fetch API
			let preload = document.getElementById("preload");
            
			let name = document.getElementById("name");
			let year = document.getElementById("year");
			let rated = document.getElementById("rated");
			let time = document.getElementById("length");

			let movieImage = document.getElementById("movie-img");
			let genreDiv = document.getElementById("genre");
			let plotDiv = document.getElementById("plot");
			let rating = document.getElementById("ratingNumber");
			let ratingVotes = document.getElementById("ratingVotes");

			let director = document.getElementById("director");
			let writers = document.getElementById("writers");
			let stars = document.getElementById("stars");

			name.innerText = data.Title;
			year.innerText = data.Year;
			rated.innerText = data.Rated;
			time.innerText = data.Runtime;
			movieImage.src = data.Poster;

			const genresArray = data.Genre.split(",");

			for (genre of genresArray) {
				let newGenre = document.createElement("div");
				newGenre.classList.add("genres");

				newGenre.innerText = genre;

				genreDiv.appendChild(newGenre);
			}
			plotDiv.innerText = data.Plot;
			rating.innerText = data.imdbRating;
			ratingVotes.innerText = data.imdbVotes;
			director.innerText = data.Director;
			writers.innerText = data.Writer;
			stars.innerText = data.Actors;

			preload.style.display = "none";
			
		});
})();
