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

	// 1.2 About forEach:
		/**
		 * Array.prototype.forEach ( callbackfn [ , thisArg ] )
		 * 
		 * 
			callbackfn should be a function that accepts three arguments. forEach calls callbackfn once for each element present in the array, in ascending order.
			callbackfn is called only for elements of the array which actually exist; it is not called for missing elements of the array.

			If a thisArg parameter is provided, it will be used as the this value for each invocation of callbackfn. If it is not provided, undefined is used instead.

			callbackfn is called with three arguments: the value of the element, the index of the element, and the object being traversed.

			forEach does not directly mutate the object on which it is called but the object may be mutated by the calls to callbackfn.
		* 
		* @param callbackfn [ , thisArg ]
		* @returns undefined
		*/

	// 1.3 forEach simple example
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

	// 1.4 forEach example with two callback arguments
	function someFunction(films) {
		
	}

	// 1.5 forEach advanced example with [thisArg]
	function someAdvancedFunction(films) {
		
	}



sw_api.getAllFilms()
	.then((response) => {

		//There is an Array with full list of Star Wars films in variable films
		const films = response.results;


		// 1.1
		///console.log(getFormatedFilms(films));
		
		// 1.2
		//console.log(getFormatedFilms(films));ZZZ

	});




	
	