'use strict';

let numberOfFilms;

function start() {
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
	}
}

start ();

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function rememberMyFilms() {
	let i = 0;
	while (i < 2) {

		let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
		let evaluationOfFilm = prompt("На сколько оцените его?", "");	

		if (lastFilm != null && evaluationOfFilm != null && lastFilm != '' && evaluationOfFilm != '' && lastFilm.length < 50) {
			personalMovieDB.movies[lastFilm] = evaluationOfFilm;
			console.log('done');
		} else {
			console.log('error');
			i--;
		};

		i++;
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	};
	
}

detectPersonalLevel();

function showMyDB() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	}
}

showMyDB();

function writeYourGenres() {
	for (let i = 1; i <=3; i++) {
		let genreOfFilm = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i - 1] = genreOfFilm;
	}
}

writeYourGenres();