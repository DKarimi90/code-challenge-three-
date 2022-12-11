document.getElementById("btn"). addEventListener("click", getFilms)

function getFilms() {
    fetch("./db.json")
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

}


