// How to request data from an API using JavaScript and jQuery

// There are multiple ways to do this!

// 1. jQuerys $.ajax() function
// 2. The Browser's fetch() function
// 3. Using the Axios http client library

// VARIABLES
const URL = "http://www.omdbapi.com/?apikey=a71b148a&t=";

// ELEMENT REFERENCES  jQuery variables   // references element in html
const $title = $('#title');
const $year = $('#year');
const $rating = $('#rated');
// const $imdb = $('#ratings');
const $form = $('form');
const $input = $(`input[type='text']`);         // stores user input value specifaclly the text

// EVENT LISTENERS
$form.on('submit', handleGetData)       // dont add () because it will invoke the function you want this to run once its clicked

// FUNCTIONS

function handleGetData(event){  // function that runs data 
                                                            // event object is created when a function is created
event.preventDefault()          // prevents page from reloading when data is ran
const userInput = $input.val()          // access the string of the input 
$.ajax(URL + userInput).then(function(data) {           // Once I have that data run the function and console log the string and the actual data, graps url and the userInput then continues down
    console.log('movie data is ready')
    // console.log(data)
    $title.text(data.Title)                           // access the data then access the title to get title text
    $year.text(data.Year)                          
    $rating.text(data.Rated)
    // $imdb.text(data.Ratings[0])
    $('main').append(`<img src="${data.Poster}"/>`)          // adds movie poster to bottom of the page because its a child???
}, function(error) {                                    
    console.log('something is wrong')
    console.log(error)
})

}




