let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');
let articleBlogs = document.querySelectorAll('.blog-article.short');
let cardViewGridButton = document.querySelector('.card-view-button-grid');
let cardViewListButton = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');
let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list li a');

darkThemeButton.onclick = function () {
    lightThemeButton.classList.remove('active');
    darkThemeButton.classList.add('active');
    document.body.classList.add('dark');
}

lightThemeButton.onclick = function () {
    darkThemeButton.classList.remove('active');
    lightThemeButton.classList.add('active');
    document.body.classList.remove('dark');
}

serifFontButton.onclick = function () {
    sansSerifFontButton.classList.remove('active');
    serifFontButton.classList.add('active');
    document.body.classList.add('serif');
}

sansSerifFontButton.onclick = function () {
    serifFontButton.classList.remove('active');
    sansSerifFontButton.classList.add('active');
    document.body.classList.remove('serif');
}

for (let articleBlog of articleBlogs) {
    let moreButton = articleBlog.querySelector('.more');
    moreButton.onclick = function () {
        articleBlog.classList.remove('short');
    }
}

cardViewListButton.onclick = function () {
    cardViewGridButton.classList.remove('active');
    cardViewListButton.classList.add('active');
    cards.classList.add('list');
}

cardViewGridButton.onclick = function () {
    cardViewListButton.classList.remove('active');
    cardViewGridButton.classList.add('active');
    cards.classList.remove('list');
}

for (let activeImage of previews) {
    activeImage.onclick = function (evt) {
        evt.preventDefault();
        mainImage.src = activeImage.href;

        let currentActive = document.querySelector('.preview-list .active-item');
        currentActive.classList.remove('active-item');
        activeImage.classList.add('active-item');
    };
}