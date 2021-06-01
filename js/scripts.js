'get strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log('content loaded');
    
    searchButton = document.querySelector('#searchMovieButton');
   

    searchButton.addEventListener('click', function () {
        searchMovieDatabase();


    })
    function searchMovieDatabase() {
        let userInput = "harry potter";
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=8d004e3d788dfaf960480440b8e3009b&language=en-US&query=${userInput}&page=1&include_adult=false`).then(function (response) {
            return response.json();
        }).then(function (searchResults) {
            console.log(searchResults.results[0].original_title);
            console.log(searchResults.results[0].release_date);
            console.log(searchResults.results[0].vote_average);
        })
    }






})