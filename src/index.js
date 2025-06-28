let currentPage = 3

const listsJson = (arr) => {
    return arr.map(
        (elem) => `
            <li class="first__item">
            <img class="first__img" src="${elem.largeImageURL}" alt="photo">
            </li>
            `
    ).join("")
}

document.querySelector(".first__button").addEventListener("click", () => {
    currentPage += 3
    checkPhoto(currentPage)
})

function checkPhoto(currentPage) {
    fetch(`https://pixabay.com/api/?key=51088992-1b6a42164dda3d7bcbf555bed&per_page=${currentPage}`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        document.querySelector(".first__list").innerHTML = listsJson(data.hits)
    })
}

fetch(`https://pixabay.com/api/?key=51088992-1b6a42164dda3d7bcbf555bed&per_page=${currentPage}`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        document.querySelector(".first__list").innerHTML = listsJson(data.hits)
    })