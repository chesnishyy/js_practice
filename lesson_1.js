import * as sw_api from './sw_api';

//1. LESSON 1

	//1.1 for loop
	function getFormatedFilms(films) {
		let counter,
			result = [];

		for (counter = 0; counter < films.length; counter++) {
			result.push({
				episode: films[counter].episode_id,
				name: films[counter].title,
				director: films[counter].director
			})
		}
		return result;
	}

	// 1.2 forEach
	function getFormatedFilms(films) {
		let result = [];

		films.forEach((film) => {
			result.push({
				episode: film.episode_id,
				name: film.title,
				director: film.director,
				release: firm.release_date
			})
		})
	
		return result;
	}

	// 1.3 
	function


sw_api.getAllFilms()
	.then((response) => {

		//There is an Array with full list of Star Wars films in variable films
		const films = response.results;
		console.log(films[0])
		// 1.1
		///console.log(getFormatedFilms(films));
		
		// 1.2
		//console.log(getFormatedFilms(films));

	});




	
	