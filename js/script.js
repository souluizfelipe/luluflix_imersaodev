const moviesList = [];


const displaymovie = {

    inputContent() {
        
    },

    displayAddContent() {
        const listBanners = document.querySelector('.list-banners');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        
        figure.classList.add('wrapper-banner');
        img.src = 'img/banner2.jpg';
        img.alt = 'movie banner';
        img.classList.add('.main-banner');
        figcaption.textContent = 'Nome do filme';
        figcaption.classList.add('main-caption');        
        
        figure.insertAdjacentElement('beforeend', img);
        figure.insertAdjacentElement('beforeend', figcaption);
        listBanners.insertAdjacentElement('beforeend', figure);
    },
};


displaymovie.displayAddContent();