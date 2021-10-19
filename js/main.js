var movies =  [
    {
        rating: document.getElementById("mf-rating"),
        name: document.getElementById("mf-name"),
        image: "https://m.media-amazon.com/images/I/51mTtUGvUCL.jpg"
    }
];

function addMovies(){    
    for(let i = 0;  i < movies.length; i++){
        let cardList = document.getElementById("cards-list");
        let card = '<div class="col-sm ml-col-styling">'+'<div class="card bg-transparent ml-card">'+
            '<img src="'+movies[i].image+'" alt="'+movies[i].name+'" class="movie-card-image">'+
            '<div class="ml-card-img-overlay">'+
            '<i class="fas fa-star starUp'+movies[i].name+' stars"></i>'+'<i class="fas fa-star starCent'
            +movies[i].name+' stars"></i>'+'<i class="fas fa-star starLow'+movies[i].name+
            ' stars"></i></div></div></div>';
        cardList.innerHTML += card
    }
}


