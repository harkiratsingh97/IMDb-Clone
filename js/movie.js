(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const imdbId = urlParams.get('imdbID')
    console.log(imdbId)
	fetch(
		`http://www.omdbapi.com/?apikey=c0f0e6d3&i=${imdbId}&plot=full`
	)
		.then((data) => {
			return data.json();
		})
		.then((data) => {
			
			console.log(data);
		});
})();
