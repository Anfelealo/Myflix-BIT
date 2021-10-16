var movies = [
    {
        rating: 2,
        name: "El Titanic",
        image: "https://m.media-amazon.com/images/I/51mTtUGvUCL.jpg"
    },
    {
        rating: 3,
        name: "Interstellar",
        image: "https://pics.filmaffinity.com/Interstellar-366875261-large.jpg"
    }
]

function addMovies(){
    for(let i = 0;  i < movies.length; i++){
        let cardList = document.getElementById("cards-list");
        let card = '<div class="col-2 movies-list-movie-container-movie-card movies-list-cols oxyImg">'+
            '<img src="'+movies[i].image+'" alt="oxygen-movie" class="movie-card-image">'+
            '<i class="fas fa-star starUp"></i>'+'<i class="fas fa-star starCent"></i>'+
            '<i class="fas fa-star starLow"></i></div>';
        cardList.innerHTML += card
    }
}

addMovies();