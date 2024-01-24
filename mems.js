let buttt = document.querySelector('.butt');
let tit = document.querySelector('.title');
let img = document.querySelector('img');
let last = document.querySelector('.last');

const update = (url, title, author) => {
    img.setAttribute("src", url);
    tit.innerHTML = title;
    last.innerHTML = author;
}

const genmeme = () => {
    fetch('https://meme-api.com/gimme').then(response => response.json()).then(data => {
        update(data.url, data.title, data.author)
    })
}
buttt.addEventListener("click", genmeme)