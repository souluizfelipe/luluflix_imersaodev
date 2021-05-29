const moviesList = [];

const displayMovie = {
    movieNameRaw: document.querySelector('.main-input.-name'),
    movieBannerRaw: document.querySelector('.main-input.-banner'),

    inputContentName() {
        console.log(this.movieNameRaw.value);
        return displayMovie.movieNameRaw.value;
    },

    inputContentBanner() {
        console.log(this.movieBannerRaw.value);
        return displayMovie.movieBannerRaw.value;
        // return utils.verifyURL(displayMovie.movieBannerRaw.value);
    },
   
    addMovie() {
        const listBanners = document.querySelector('.list-banners');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        
        figure.classList.add('wrapper-banner');
        img.src = `${displayMovie.inputContentBanner()}`;
        img.alt = 'movie banner';
        
        img.classList.add('.main-banner');
        figcaption.textContent = `${displayMovie.inputContentName()}`;
        figcaption.classList.add('main-caption');        
        
        figure.insertAdjacentElement('beforeend', img);
        figure.insertAdjacentElement('beforeend', figcaption);
        listBanners.insertAdjacentElement('beforeend', figure);
        
        moviesList.push()
    },
    
    submitContent() {
        displayMovie.addMovie();
        utils.clearInput(); 
    },
};

const utils = {
    // verifyURL() { 
    //      (inp) => {
    //         inp = inp.value;
    //         if (inp.endsWith('.jpg')) {
    //             return inp.value;
    //         } else { 
    //             return alert('Insira uma URL valida');
    //         } 
    //     }
    // },

    clearInput() {
        displayMovie.movieNameRaw.value = '';
        displayMovie.movieBannerRaw.value = '';
    },
}

