// How to request data from an API using JavaScript and jQuery

// There are multiple ways to do this!

// 1. jQuerys $.ajax() function
// 2. The Browser's fetch() function
// 3. Using the Axios http client library

// VARIABLES
const URL = "http://www.omdbapi.com/?apikey=a71b148a&t=Die+Hard";

// ELEMENT REFERENCES  jQuery variables   // references element in html
const $title = $('#title');
const $year = $('#year');
const $rating = $('#rated');
const $imdb = $('#ratings');

// EVENT LISTENERS


//FUNCTIONS
function handleGetData(){  // function that runs data 

$.ajax(URL).then(function(data) {           // Once I have that data run the function and console log the string and the actual data
    console.log('movie data is ready')
    // console.log(data)
    $title.text(data.Title)                           // access the data then access the title to get title text
    $year.text(data.Year)                          
    $rating.text(data.Rated)
    $imdb.text(data.Ratings[0])
    $('main').append(`<img src="${data.Poster}"/>`)             
}, function(error) {                                    
    console.log('something is wrong')
    console.log(error)
})

}


