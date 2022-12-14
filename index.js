// adding event listeners to the button elements 
document.getElementById("btn"). addEventListener("click", getFilms)
document.getElementById("btn2"). addEventListener("click", buyTicket)
// call back function to be executed after clicking on the first button (btn) 
function getFilms() {
    let baseUrl = "./db.json"
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
        let output = "<h2>Films</h2>"
        const array = data.films
        array.forEach(function(films){
            output += 
            `<ul>
                <li> Poster: <img src = "${films.poster}" alt = "films.poster"></li>
                <li> Title: ${films.title}</li>
                <li> Runtime: ${films.runtime}</li>
                <li> Showtime: ${films.showtime}</li>
                <li> Available Tickets: ${films.capacity - films.tickets_sold}</li>
            </ul>
            `
        })
        document.getElementById('output').innerHTML = output; 
    })
// call back function to be executed onces button 2 (btn2) is clicked 
}

function buyTicket() {
    let baseUrl = "./db.json"
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
        let output = "<h3>Available Tickets</h3>"
        const array = data.films
        array.forEach(function(films){
            output += 
            `<div>
                <h6>${films.title}</h6>
                <h4> Tickets: ${films.capacity - films.tickets_sold}</h4>
            </div>
            `
        })
        document.getElementById('output').innerHTML = output; 
    })

}

    

