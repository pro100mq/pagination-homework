let e=3;const t=e=>e.map(e=>`
            <li class="first__item">
            <img class="first__img" src="${e.largeImageURL}" alt="photo">
            </li>
            `).join("");document.querySelector(".first__button").addEventListener("click",()=>{var i;i=e+=3,fetch(`https://pixabay.com/api/?key=51088992-1b6a42164dda3d7bcbf555bed&per_page=${i}`).then(e=>e.json()).then(e=>{document.querySelector(".first__list").innerHTML=t(e.hits)})}),fetch(`https://pixabay.com/api/?key=51088992-1b6a42164dda3d7bcbf555bed&per_page=${e}`).then(e=>e.json()).then(e=>{document.querySelector(".first__list").innerHTML=t(e.hits)});
//# sourceMappingURL=pagination-homework.9d9e8b70.js.map
