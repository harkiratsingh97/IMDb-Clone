let search = document.getElementById("a");
let searchMovie = "";
let searchDropdown = document.getElementById("searchDropdown");

//Event listener for keyboard input and making an API call to get the movie name from Title
search.addEventListener("keyup", (data) => {
	// search.value.replace(" ", "_");
	// console.log(search.value);
	fetch(
		`http://www.omdbapi.com/?i=tt3896198&apikey=c0f0e6d3&s=${search.value}&plot=full`
	)
		.then((data) => {
			return data.json();
		})
		.then((data) => {
			if (data.Response == "False") {
				searchDropdown.innerHTML = "Not found";
				return;
			}
			searchDropdown.style.visibility = "visible";

			searchDropdown.innerText = "";
			for (let movie of data.Search) {
				let dropdownElement = document.createElement("a");
				dropdownElement.href = `/movie.html?title=${movie.Title}&imdbID=${movie.imdbID}`;
				dropdownElement.innerText = movie.Title;
				console.log(searchDropdown);
				searchDropdown.appendChild(dropdownElement);
			}
		});
});

//Removing the dropdown of movie suggestion if clicked somewhere else on the page
document.addEventListener("click", (data) => {
	if (!data.target.classList.contains("dont-close-dropdown"))
		searchDropdown.style.visibility = "hidden";
});
