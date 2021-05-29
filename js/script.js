const moviesList = [];

const displayMovie = {
    movieNameRaw: document.querySelector('.main-input.-name'),
    movieBannerRaw: document.querySelector('.main-input.-banner'),

    inputContentName() {
        return displayMovie.movieNameRaw.value;
    },

    inputContentBanner() {
        return displayMovie.movieBannerRaw.value;
    },
    
    addMovie() {
        const listBanners = document.querySelector('.list-banners');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        
        figure.classList.add('wrapper-banner');
        img.src = `${displayMovie.inputContentBanner()}`;
        img.alt = `${displayMovie.inputContentName()} banner`;
        img.lang = 'en';
        img.classList.add('main-banner');
        figcaption.textContent = `${displayMovie.inputContentName()}`;
        figcaption.classList.add('main-caption');  
        figcaption.lang = 'en';
        
        figure.insertAdjacentElement('beforeend', img);
        figure.insertAdjacentElement('beforeend', figcaption);
        listBanners.insertAdjacentElement('beforeend', figure);
        
        moviesList.push()
    },
    
    submitContent(url, nome) {
            if(url.endsWith('.jpg') && nome.length > 0) {
                displayMovie.addMovie();
                utils.clearInput(); 
            } else {
                return alert('Preencha o nome do filme ou insara a URL de uma imagem .jpg')
            };
        } 
};

const utils = {
    
    clearInput() {
        displayMovie.movieNameRaw.value = '';
        displayMovie.movieBannerRaw.value = '';
    },
}

