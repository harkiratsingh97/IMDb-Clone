let search = document.getElementById("a");
let searchMovie = "";
let searchDropdown = document.getElementById("searchDropdown");
let dropdownElement = document.createElement("a");
search.addEventListener("keyup", (data) => {
	// search.value.replace(" ", "_");
	// console.log(search.value);
	fetch(
		`http://www.omdbapi.com/?i=tt3896198&apikey=c0f0e6d3&t=${search.value}&plot=full`
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
			dropdownElement.href=`/movie.html?title=${data.Title}&imdbID=${data.imdbID}`
			dropdownElement.innerText = data.Title
			searchDropdown.innerText=""
			searchDropdown.appendChild(dropdownElement);
			// console.log(data);
		});
});

document.addEventListener("click", (data) => {
	if (!data.target.classList.contains("dont-close-dropdown"))
		searchDropdown.style.visibility = "hidden";
});
