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

function filterMovies(){
    const search="Interstellar"
    const moviesFound=movies.filter(movie=>movie.name===search)
    console.log(moviesFound)
}
filterMovies()