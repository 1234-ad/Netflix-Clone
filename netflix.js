// --------------sticky-nevbar-----------
function scrolling() {
    let nav1 = document.querySelector(".netflix-navbar");
    let y = document.documentElement.scrollTop;

    if (y > 200) {
        nav1.classList.add('nav-sticky');
    } else {
        nav1.classList.remove('nav-sticky');
    }
}
window.onscroll = scrolling;

// Function to fetch data from API and create image elements
function fetchAndDisplayData(url, container) {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then((movieData) => {
            let movilist = movieData.results;

            movilist.forEach((value) => {
                let poster = value.poster_path;
                let imgUrl = `https://image.tmdb.org/t/p/w500${poster}`;

                container.innerHTML += `
<div class="imgeicon ">
<img src="${imgUrl}" alt="" class="img-poster">
<img src="https://preview.colorlib.com/theme/tralive/assets/img/icon/play-butto.svg" alt="" class="playmovie">
</div>
`;
            });
        })
        .catch(error => {
            console.error('Error fetching data:',error);
        });
}

// Fetch and display data for each slide
let slide1 = document.querySelector(".slide1");
fetchAndDisplayData("https://api.themoviedb.org/3/movie/popular?api_key=518ae89aa3a583207617957aae8e6fdc", slide1);

let slide2 = document.querySelector(".slide2");
fetchAndDisplayData("https://api.themoviedb.org/3/tv/popular?api_key=518ae89aa3a583207617957aae8e6fdc", slide2);

let slide3 = document.querySelector(".slide3");
fetchAndDisplayData("https://api.themoviedb.org/3/trending/all/day?api_key=518ae89aa3a583207617957aae8e6fdc", slide3);