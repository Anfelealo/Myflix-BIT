var movies = [
    {
        rating: 2,
        name: "ElTitanic",
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
        let cardList = document.getElementById("ml-row-styling");
        let card = '<div class="col-sm ml-col-styling">'+'<div class="card bg-transparent ml-card">'+
            '<img src="'+movies[i].image+'" alt="'+movies[i].name+'" class="movie-card-image">'+
            '<i class="fas fa-star starUp'+movies[i].name+'"></i>'+'<i class="fas fa-star starCent'
            +movies[i].name+'"></i>'+'<i class="fas fa-star starLow'+movies[i].name+'"></i></div></div></div>';
        cardList.innerHTML += card
    }
}

addMovies();